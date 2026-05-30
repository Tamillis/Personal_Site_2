import os
import json

def path_to_dict(path):
    name = 'Wiki' if os.path.basename(path) == '' else os.path.basename(path)
    d = {}
    d['name'] = name
    d['path'] = path.replace('./public', '')
    if os.path.isdir(path):
        d['type'] = 'dir'
        d['contents'] = [
            path_to_dict(path+'/'+content) 
            for content in os.listdir(path) 
            if os.path.isdir(path+'/'+content) or content.endswith('.md')
        ]
    else:
        d['type'] = 'file'
    return d

route_map = path_to_dict("./public/mewiki")
print(json.dumps(route_map, indent=4))

f = open("./src/assets/wikiroutes.json", "w")
f.write(json.dumps(route_map, indent=4))
f.close()