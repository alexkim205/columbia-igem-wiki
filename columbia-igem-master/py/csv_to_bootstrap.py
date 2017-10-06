import csv
import os.path
import sys
import glob

dirname = str(sys.argv[1])
for filename in glob.glob(dirname + '*.csv'):
    htmlname = os.path.splitext(os.path.dirname(filename))[0] + "/html/" + os.path.splitext(os.path.basename(filename))[0] + "_v2.html"
    basename = os.path.splitext(os.path.basename(filename))[0]

    csvFile = open(filename)
    csvReader = csv.reader(csvFile)
    csvData = list(csvReader)

    with open(htmlname, 'w') as html:
        html.write('<!-- TABLE PASTE START -->\r')
        #html.write('<div class="col-md-12 col-xs-12 text-center">\r')
        #html.write('<h3>' + basename + '</h3>\r<p>Decriptive Text</p>\r')
        html.write('<div class="table-responsive">\r<table class="table table-condensed table-hover">\r')

        r = 0
        for row in csvData:
            print(row)
            if r == 0:
                print("FIRST ROW")
                html.write('<thead>\r<tr>\r')
                for col in row:
                    html.write('<th>' + col + '</th>\r')
                html.write('</tr>\r</thead>\r')
                html.write('<tbody>\r')
            else:
                html.write('<tr>\r')
                c = 0
                for col in row:
                    if c == 0:
                        html.write('<td class="yaxis">' + col + '</td>\r')
                    else:
                        html.write('<td>' + col + '</td>\r')
                    c += 1

                html.write('</tr>\r')

            r += 1

        html.write('</tbody>\r</table>\r</div>\r<!-- div table -->\r')
        #html.write('</div>\r<!-- div col -->\r')
        html.write('<!-- TABLE PASTE END -->\r')
