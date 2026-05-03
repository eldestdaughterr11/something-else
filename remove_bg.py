import os
from PIL import Image

def make_transparent(input_path, output_path, tolerance=30):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    bg_color = datas[0] # Use top-left pixel as background color
    
    newData = []
    for item in datas:
        # Check if pixel is within tolerance of background color
        if abs(item[0] - bg_color[0]) <= tolerance and \
           abs(item[1] - bg_color[1]) <= tolerance and \
           abs(item[2] - bg_color[2]) <= tolerance:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "PNG")

input_file = r"C:\Users\tipid\.gemini\antigravity\brain\d525832d-3bf0-479a-9a83-2a4421317877\media__1774557615930.png"
output_file = r"public\assets\paige.png"

make_transparent(input_file, output_file)
print("Saved to " + output_file)
