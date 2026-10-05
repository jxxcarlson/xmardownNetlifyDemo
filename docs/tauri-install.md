1. Optional: bring over changes from DemoTOC+Sync. Do this only if you've changed DemoTOC+Sync here and want those changes in the app:     
  cd ~/dev/elm-work/scripta/XMarkdownNetlifyDemo                                                                                             
  scripts/sync-from-source.sh --dry-run   # preview what would change                                                                        
  scripts/sync-from-source.sh                                                                                                                
  The script refuses to run if that repo has uncommitted changes, unless you pass --force. It also upgrades jxxcarlson/xmarkdown-compiler to 
  its latest published version. That means the LaTeX export work on this branch won't be included until it's published.                      
                                                                                                                                             
  2. Build the app:                                                                                                                          
  cd ~/dev/elm-work/scripta/XMarkdownNetlifyDemo/desktop                                                                                     
  npm install      # only needed the first time                                                                                              
  npm run build    # compiles Elm, then builds XMarkdown.app                                                                                 
                                                                                                                                             
  3. Install it: quit XMarkdown if it's running, then replace the copy in /Applications:                                                     
  rm -rf /Applications/XMarkdown.app                                                                                                         
  cp -R src-tauri/target/release/bundle/macos/XMarkdown.app /Applications/                                                                   
  open /Applications/XMarkdown.app                                                                                                           
  The app isn't signed. If macOS refuses to open it, right-click it and choose Open. 
