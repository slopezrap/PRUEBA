# -*- mode: python ; coding: utf-8 -*-

block_cipher = None


a = Analysis(['C:/Users/slope/OneDrive/Escritorio/EY/ANGULAR-ELECTRON-DJANGO/PROYECTO_WEB/BACK/WS_DJANGO/manage.py'],
             pathex=['C:\\Users\\slope\\OneDrive\\Escritorio\\EY\\ANGULAR-ELECTRON-DJANGO\\PROYECTO_WEB\\BACK\\WS_DJANGO'],
             binaries=[],
             datas=[],
             hiddenimports=[],
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher,
             noarchive=False)
pyz = PYZ(a.pure, a.zipped_data,
             cipher=block_cipher)
exe = EXE(pyz,
          a.scripts,
          [],
          exclude_binaries=True,
          name='WS_DJANGO',
          debug=False,
          bootloader_ignore_signals=False,
          strip=False,
          upx=True,
          console=True )
coll = COLLECT(exe,
               a.binaries,
               a.zipfiles,
               a.datas,
               strip=False,
               upx=True,
               upx_exclude=[],
               name='WS_DJANGO')
