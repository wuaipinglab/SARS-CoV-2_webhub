import os
import csv
import json

weblinks_csv = os.path.join("data", "weblinks.csv")
weblinks_json = os.path.join("src", "weblinks.json")

with open(weblinks_csv, newline="") as csvfile, open(weblinks_json, "w") as jsonfile:
    reader = csv.DictReader(csvfile)
    json.dump([row for row in reader], jsonfile, indent=2)
