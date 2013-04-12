desc "see usage"
task :default do 
  system 'rake -T'
end

desc "run tests"
task :test do 
  system './node_modules/.bin/jasmine-node \
    --verbose \
    spec'
end

desc "run tests automatically"
task :autotest do 
  system './node_modules/.bin/jasmine-node \
    --autotest \
    --verbose \
    spec classes ./helpers.js' # adding classes dir to watched directories
end

desc "play the rover game"
task :gui do 
  system 'node gui.js'
end

desc "run api with example input"
task :api do
  system 'node api.js \
  --map-width 100 \
  --map-height 100 \
  --rover-x 1 \
  --rover-y 2 \
  --rover-direction south \
  --obstacles "1,2; 3,4; 5,6" \
  ffrfflfflbb'
end

desc "see api help"
task :api_help do
  system 'node api.js \
  --help'
end