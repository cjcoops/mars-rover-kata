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
    spec classes' # adding classes dir to watched directories
end