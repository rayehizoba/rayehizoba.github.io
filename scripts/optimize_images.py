import os
import sys
import shutil
import tarfile
from datetime import datetime
from PIL import Image


# Function to optimize image
def optimize_image(file_path, quality=95):
    with Image.open(file_path) as img:
        # Resize image
        img = img.resize((int(img.width / 2), int(img.height / 2)))
        # Save optimized image with specified quality
        img.save(file_path, optimize=True, quality=quality)


# Function to process directory and its subdirectories
def process_directory(directory, quality=95):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".jpg") or file.endswith(".jpeg") or file.endswith(".png"):
                file_path = os.path.join(root, file)
                optimize_image(file_path, quality=quality)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python optimize_images.py path/to/images/folder [quality]")
        sys.exit(1)

    directory = sys.argv[1]
    quality = int(sys.argv[2]) if len(sys.argv) > 2 else 95

    # Backup the directory before optimizing images
    backup_folder = f"{directory}_backup_{datetime.now().strftime('%Y%m%d%H%M%S')}.tar.gz"
    with tarfile.open(backup_folder, "w:gz") as tar:
        tar.add(directory)

    # Process the directory
    process_directory(directory, quality=quality)

    print("Image optimization complete")
