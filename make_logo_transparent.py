from PIL import Image
src = r'c:\Users\B Harshitha\Downloads\imc\public\images\logo.jpeg'
dst = r'c:\Users\B Harshitha\Downloads\imc\public\images\logo.png'
img = Image.open(src).convert('RGBA')
px = img.load()
w,h = img.size
for y in range(h):
    for x in range(w):
        r,g,b,a = px[x,y]
        if r < 50 and g < 50 and b < 50:
            px[x,y] = (r,g,b,0)
img.save(dst)
print('saved', dst)
