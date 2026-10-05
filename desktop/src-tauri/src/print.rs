//! File > Print for the PDF shown in the app (assets/pdf-export.js): the PDF
//! is printed by PDFKit, which brings up the standard macOS print panel.

#[cfg(target_os = "macos")]
pub fn print_pdf(path: &str) -> Result<(), String> {
    use objc2::{rc::Retained, AnyThread, MainThreadMarker};
    use objc2_app_kit::NSPrintInfo;
    use objc2_foundation::{NSString, NSURL};
    use objc2_pdf_kit::{PDFDocument, PDFPrintScalingMode};

    // AppKit printing must run on the main thread (see the print_pdf command).
    let mtm = MainThreadMarker::new().ok_or("printing must run on the main thread")?;
    let url = NSURL::fileURLWithPath(&NSString::from_str(path));
    let document: Retained<PDFDocument> =
        unsafe { PDFDocument::initWithURL(PDFDocument::alloc(), &url) }.ok_or_else(|| format!("Could not read {path}"))?;
    let info = NSPrintInfo::sharedPrintInfo();
    let operation = unsafe {
        document.printOperationForPrintInfo_scalingMode_autoRotate(Some(&info), PDFPrintScalingMode::PageScaleDownToFit, true, mtm)
    }
    .ok_or("Could not set up printing")?;
    operation.setJobTitle(Some(&NSString::from_str(path.rsplit('/').next().unwrap_or(path))));
    operation.setShowsPrintPanel(true);
    // Modal: returns once the panel is dismissed (printed or cancelled).
    operation.runOperation();
    Ok(())
}

#[cfg(not(target_os = "macos"))]
pub fn print_pdf(_path: &str) -> Result<(), String> {
    Err("Printing is only available on macOS".into())
}
