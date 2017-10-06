import os
import glob

dirname = "/Users/alex/Dropbox/Columbia University/Freshman/Summer/iGEM Website/csv/html/"

for filename in glob.glob(dirname + "*.html"):
    print(os.path.splitext(os.path.basename(filename))[0])
