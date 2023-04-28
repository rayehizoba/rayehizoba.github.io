import os
import sys
import shutil
import tarfile


def restore_directory(backup_file, restore_path):
    # Extract the backup file
    with tarfile.open(backup_file, "r:gz") as tar:
        tar.extractall(path=restore_path)

    # Copy overwriting any duplicates
    backup_folder_name = os.path.basename(backup_file).replace('.tar.gz', '')
    backup_directory = os.path.join(restore_path, backup_folder_name)
    for root, dirs, files in os.walk(backup_directory):
        for file in files:
            src_path = os.path.join(root, file)
            dest_path = os.path.join(root.replace(backup_directory, restore_path), file)
            shutil.copy(src_path, dest_path)
        for dir in dirs:
            src_path = os.path.join(root, dir)
            dest_path = os.path.join(root.replace(backup_directory, restore_path), dir)
            shutil.copytree(src_path, dest_path, dirs_exist_ok=True)


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python restore_images.py path/to/backup/folder path/to/restore/folder")
        sys.exit(1)

    backup_file = sys.argv[1]
    restore_path = sys.argv[2]

    restore_directory(backup_file, restore_path)

    print("Image restore complete")
