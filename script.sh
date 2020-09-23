#!/bin/bash
#paquete para instalar necesarios, solo necesario la primera vez
#apt-get install python3-venv
#apt-get update
#apt-get install dos2unix


dos2unix script.sh
#global variable con el path donde esta python.exe
python_path="/mnt/c/Entorno_Desarollo/Python38/"
#version de python
python_version="3.8"
#path donde quiero que se guarde el entorno
virtual_env_path="/mnt/c/Users/slope/OneDrive/Escritorio/EY/ANGULAR-ELECTRON-DJANGO/"
virtual_env_folder_name="entorno_python/"
virtual_env_name="python-env"
#------------------ CREACION DE UN EJECUTABLE PYTHON BASADO EN SU VERSION -----------------
#chequeo si se llama python.exe o python3.exe lo hago asi
#para al ejecutar programas que se tenga que ejecutar con python3
if [ -f ${python_path}python${python_version}.exe ]
then
    echo ${python_path}python${python_version}.exe exists
else
    echo ${python_path}python.exe does not exist
    # use backticks " ` ` " to execute shell command
    mv ${python_path}python.exe ${python_path}python${python_version}.exe
fi;
#------------------ CREACION DE ENTORNO VIRTUAL -----------------
#chequeo si existe el directorio (-d) anterior, sino es asi lo creo
if   [ ! -d ${virtual_env_path}${virtual_env_folder_name} ]
then
    echo ${virtual_env_path}${virtual_env_folder_name} does not exists
    # use backticks " ` ` " to execute shell command
    mkdir ${virtual_env_path}${virtual_env_folder_name}
    echo virtual enviroment folder created
    python${python_version} -m venv ${virtual_env_path}${virtual_env_folder_name}${virtual_env_name}
    echo virtual enviroment created
else
  if [ ! -d ${virtual_env_path}${virtual_env_folder_name}${virtual_env_name} ]
  then
    echo ${virtual_env_path}${virtual_env_folder_name}${virtual_env_name} does not exists
    python${python_version} -m venv ${virtual_env_path}${virtual_env_folder_name}${virtual_env_name}
    echo virtual enviroment created
  else
    echo ${virtual_env_path}${virtual_env_folder_name}${virtual_env_name} exists
  fi
fi;
#/mnt/c/Windows/System32/cmd.exe
#cmd.exe /c start cmd.exe /c wsl.exe
#exec /mnt/c/Windows/System32/bash.exe -c "source ${virtual_env_path}${virtual_env_folder_name}${virtual_env_name}/bin/activate"
