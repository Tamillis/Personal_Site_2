import os
import json
from pathlib import Path
routes = os.listdir('./src/assets/wiki')
print(json.dumps(routes))

f = open("./src/assets/wikiroutes.json", "w")
f.write(json.dumps(routes))
f.close()