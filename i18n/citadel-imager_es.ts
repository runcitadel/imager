<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es_ES">
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="173"/>
        <source>Error writing to storage</source>
        <translation>Error al escribir el la unidad de almacenamiento</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="196"/>
        <location filename="../downloadextractthread.cpp" line="394"/>
        <source>Error extracting archive: %1</source>
        <translation>Error al extraer el archivo: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="264"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Error al montar la partición FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="285"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translatorcomment>El sistema operativo no montó la partición FAT32</translatorcomment>
        <translation>El sistema operativo no montó la partición FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="310"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>Error al cambiar al directorio &apos;%1&apos;</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="121"/>
        <source>opening drive</source>
        <translation>abriendo unidad de almacenamiento</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="155"/>
        <source>Error running diskpart: %1</source>
        <translation>Error al correr diskpart: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="176"/>
        <source>Error removing existing partitions</source>
        <translation>Error al remover las particiones existentes</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="203"/>
        <source>Authentication cancelled</source>
        <translation>Autentificación cancelada</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="208"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>Error al correr authopen para obtener acceso al disco &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="209"/>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>Verifique si &apos;Raspberry Pi Imager&apos; tiene permitido el acceso a &apos;volúmenes extraíbles&apos; en la configuración de privacidad (en &apos;archivos y carpetas&apos; o, alternativamente, déle &apos;acceso completo al disco&apos;).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="230"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>No se puede abrir el dispositivo de almacenamiento &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="278"/>
        <source>discarding existing data on drive</source>
        <translation>descartando la información existente en la unidad</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="298"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>Vaciando completamente (marcando todo con cero) el primer y el último MB de la unidad</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="304"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translatorcomment>Error al vaciar completamente (marcar todo con ceros) MBR</translatorcomment>
        <translation>Error al vaciar completamente (marcar todo en cero) MBR</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="313"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>Error de escritura al tratar de vaciar completamente (marcar todo con ceros) la última parte de la tarjeta.&lt;br&gt;La tarjeta podría mostrar una capacidad incorrecta (posible falsificación).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="377"/>
        <source>starting download</source>
        <translation>empezando descarga</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="419"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>Error de acceso denegado mientras se escribía el archivo al disco.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="424"/>
        <source>Controlled Folder Access seems to be enabled. Please add both citadel-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>El acceso controlado a carpetas parece estar habilitado. Agregue citadel-imager.exe y fat32format.exe a la lista de aplicaciones permitidas y vuelva a intentarlo.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="430"/>
        <source>Error writing file to disk</source>
        <translation>Error al escribir el archivo en el disco</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="455"/>
        <source>Error downloading: %1</source>
        <translation>Error descargando: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="673"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>Descarga corrupta. Su hash no coincide</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="685"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>Error al escribir en la unidad de almacenamiento</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="693"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>Error al escribir en la unidad de almacenamiento (mientras fsync se ejecutaba)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="719"/>
        <source>Error writing first block (partition table)</source>
        <translation>Error al escribir el primer bloque (tabla de particiones)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="785"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>Error al leer del medio de almacenamiento. &lt;br&gt;La tarjeta SD puede no estar funcionando correctamente.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="803"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>La verificación falló. El contenido de latarjeta SD es diferente al que fue escrito en ella.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="862"/>
        <source>Waiting for FAT partition to be mounted</source>
        <translation>Esperando a que la partición FAT sea montada</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="952"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Error al montar la partición FAT32</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="975"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>El sistema operativo no montó la partición FAT32</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1012"/>
        <source>Unable to customize. File &apos;%1&apos; does not exist.</source>
        <translation>No se pudo seleccionar una imagen personalizada. El archivo %1 no existe.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1016"/>
        <source>Customizing image</source>
        <translation>Personalizando imagen</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1027"/>
        <source>Error creating firstrun.sh on FAT partition</source>
        <translation>Error al crear firstrun.sh en la partición FAT</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1076"/>
        <source>Error writing to config.txt on FAT partition</source>
        <translation>Error al escribir a config.txt en la partición FAT</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1099"/>
        <source>Error writing to cmdline.txt on FAT partition</source>
        <translation>Error al escribir a cmdline.txt en la partición FAT</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="127"/>
        <location filename="../driveformatthread.cpp" line="191"/>
        <source>Error partitioning: %1</source>
        <translation>Error al particionar: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>Error al iniciar fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>Error al iniciar fat32format: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>Error al determinar la nueva letra para la unidad</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>Dispositivo inválido: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="149"/>
        <source>Error formatting (through udisks2)</source>
        <translation>Error al formatear (con udisks2)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="180"/>
        <source>Error starting sfdisk</source>
        <translation>Error al iniciar sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="202"/>
        <source>Error starting mkfs.fat</source>
        <translation>Error al iniciar mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="212"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>Error al correr mkfs.fat: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="219"/>
        <source>Formatting not implemented for this platform</source>
        <translation>El formateo no se encuentra disponible para esta plataforma</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="201"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>La capacidad de almacenamiento de la unidad no es lo suficientemente grande. &lt;br&gt;Necesita ser de por lo menos %1 GB.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="207"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>El archivo seleccionado no es una imagen de disco válida.&lt;br&gt;El tamaño del archivo %1 bytes no es un múltiplo de 512 bytes.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="379"/>
        <source>Downloading and writing image</source>
        <translation>Descargando y escribiendo la imagen al disco</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="522"/>
        <source>Select image</source>
        <translation>Selecciona la imagen</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="921"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>¿Te gustaría rellenar la contraseña del Wi-Fi del llavero del sistema?</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="36"/>
        <source>opening image file</source>
        <translation>abriendo archivo de la imagen</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="41"/>
        <source>Error opening image file</source>
        <translation>Error al abrir el archivo de la imagen</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="97"/>
        <source>NO</source>
        <translation>NO</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="110"/>
        <source>YES</source>
        <translation>SÍ</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="123"/>
        <source>CONTINUE</source>
        <translation>CONTINUAR</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="135"/>
        <source>QUIT</source>
        <translation>SALIR</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="74"/>
        <source>Advanced options</source>
        <translation>Opciones avanzadas</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="91"/>
        <source>Image customization options</source>
        <translation>Opciones de personalización de la imagen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="99"/>
        <source>for this session only</source>
        <translation>solo para esta sesión</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="100"/>
        <source>to always use</source>
        <translation>para siempre</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="112"/>
        <source>Set hostname:</source>
        <translation>Establece el hostname de la computadora:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="131"/>
        <source>Enable SSH</source>
        <translation>Habilitar SSH</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="142"/>
        <source>Use password authentication</source>
        <translation>Usar autentificación por constraseña</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="158"/>
        <source>Set password for &apos;citadel&apos; user (will be changed during setup):</source>
        <translation>Establece la constraseña para el usuario &apos;citadel&apos; (será cambiada durante la configuración inicial):</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="184"/>
        <source>Allow public-key authentication only</source>
        <translation>Permitir solamente la autentificación por llave pública</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="199"/>
        <source>Set authorized_keys for &apos;citadel&apos;:</source>
        <translation>Establece llaves de SSH autorizadas para &apos;citadel&apos;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="211"/>
        <source>Configure wifi</source>
        <translation>Configurar Wi-Fi</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="230"/>
        <source>SSID:</source>
        <translation>SSID:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="243"/>
        <source>Password:</source>
        <translation>Constraseña:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="259"/>
        <source>Show password</source>
        <translation>Mostrar contraseña</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="264"/>
        <source>Wifi country:</source>
        <translation>País del Wi-FI:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="275"/>
        <source>Set locale settings</source>
        <translation>Establecer configuración local</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="285"/>
        <source>Time zone:</source>
        <translation>Zona horaria:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="295"/>
        <source>Keyboard layout:</source>
        <translation>Distribución del teclado:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="308"/>
        <source>Persistent settings</source>
        <translation>Configuración persistente</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="316"/>
        <source>Play sound when finished</source>
        <translation>Reproducir un sonido cuando se termine</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="320"/>
        <source>Eject media when finished</source>
        <translation>Expulsar el medio de almacenamiento cuando se termine</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="333"/>
        <source>SAVE</source>
        <translation>GUARDAR</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="112"/>
        <source>Internal SD card reader</source>
        <translation>Lector interno de tarjeta SD</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="71"/>
        <source>Warning: advanced settings set</source>
        <translation>Advertencia: configuración avanzada</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="85"/>
        <source>Would you like to apply the image customization settings saved earlier?</source>
        <translation>¿Te gustaría aplicar la configuración de la personalización de la imagen guardada anteriormente?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="94"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>NO, BORRAR CONFIGURACIÓN</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="106"/>
        <source>YES</source>
        <translation>SÍ</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="118"/>
        <source>EDIT SETTINGS</source>
        <translation>EDITAR CONFIGURACIÓN</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="23"/>
        <source>Citadel Pi Imager v%1</source>
        <translation>Citadel Imager v%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="105"/>
        <location filename="../main.qml" line="360"/>
        <source>Operating System</source>
        <translation>Sistema operativo</translation>
    </message>
    <message>
        <location filename="../main.qml" line="117"/>
        <source>CHOOSE OS</source>
        <translation>ELIGE EL SISTEMA OPERATIVO</translation>
    </message>
    <message>
        <location filename="../main.qml" line="132"/>
        <source>Select this button to change the operating system</source>
        <translation>Selecciona este botón para cambiar el sistema operativo</translation>
    </message>
    <message>
        <location filename="../main.qml" line="145"/>
        <source>Select additional options</source>
        <translation>Seleccionar opciones adicionales</translation>
    </message>
    <message>
        <location filename="../main.qml" line="157"/>
        <source>CONFIGURE</source>
        <translation>CONFIGURAR</translation>
    </message>
    <message>
        <location filename="../main.qml" line="171"/>
        <source>Select this button to change operating system settings</source>
        <translation>Selecciona este botón para cambiar la configuración del sistema operativo</translation>
    </message>
    <message>
        <location filename="../main.qml" line="184"/>
        <location filename="../main.qml" line="654"/>
        <source>Storage</source>
        <translation>Unidad de almacenamiento</translation>
    </message>
    <message>
        <location filename="../main.qml" line="196"/>
        <location filename="../main.qml" line="969"/>
        <source>CHOOSE STORAGE</source>
        <translation>ELIGE LA UNIDAD DE ALMACENAMIENTO</translation>
    </message>
    <message>
        <location filename="../main.qml" line="209"/>
        <source>Select this button to change the destination storage device</source>
        <translation>Selecciona este botón para cambiar la unidad de almacenamiento de destino</translation>
    </message>
    <message>
        <location filename="../main.qml" line="226"/>
        <source>WRITE</source>
        <translation>ESCRIBIR</translation>
    </message>
    <message>
        <location filename="../main.qml" line="231"/>
        <source>Select this button to start writing the image</source>
        <translation>Selecciona este botón para empezar la escritura de la imagen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="276"/>
        <source>CANCEL WRITE</source>
        <translation>CANCELAR ESCRITURA</translation>
    </message>
    <message>
        <location filename="../main.qml" line="279"/>
        <location filename="../main.qml" line="902"/>
        <source>Cancelling...</source>
        <translation>Cancelando…</translation>
    </message>
    <message>
        <location filename="../main.qml" line="291"/>
        <source>CANCEL VERIFY</source>
        <translation>CANCELAR VERIFICACIÓN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="294"/>
        <location filename="../main.qml" line="925"/>
        <location filename="../main.qml" line="987"/>
        <source>Finalizing...</source>
        <translation>Finalizando…</translation>
    </message>
    <message>
        <location filename="../main.qml" line="420"/>
        <source>Back</source>
        <translation>Volver</translation>
    </message>
    <message>
        <location filename="../main.qml" line="421"/>
        <source>Go back to main menu</source>
        <translation>Volver al menú principal</translation>
    </message>
    <message>
        <location filename="../main.qml" line="461"/>
        <location filename="../main.qml" line="958"/>
        <source>Erase</source>
        <translation>Borrar</translation>
    </message>
    <message>
        <location filename="../main.qml" line="462"/>
        <source>Format card as FAT32</source>
        <translation>Formatear tarjeta como FAT32</translation>
    </message>
    <message>
        <location filename="../main.qml" line="470"/>
        <source>Use custom</source>
        <translation>Personalizada</translation>
    </message>
    <message>
        <location filename="../main.qml" line="471"/>
        <source>Select a custom .img from your computer</source>
        <translation>Selecciona una imagen (.img) personalizada de tu computadora</translation>
    </message>
    <message>
        <location filename="../main.qml" line="536"/>
        <source>Released: %1</source>
        <translation>Fecha de lanzamiento: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="539"/>
        <source>Cached on your computer</source>
        <translation>En memoria caché</translation>
    </message>
    <message>
        <location filename="../main.qml" line="541"/>
        <source>Local file</source>
        <translation>Archivo local</translation>
    </message>
    <message>
        <location filename="../main.qml" line="543"/>
        <source>Online - %1 GB download</source>
        <translation type="unfinished">En línea — descarga de %1 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="705"/>
        <location filename="../main.qml" line="757"/>
        <location filename="../main.qml" line="763"/>
        <source>Mounted as %1</source>
        <translation>Montado como %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="759"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[ESCRITURA-PROTEGIDA]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="801"/>
        <source>Are you sure you want to quit?</source>
        <translation>¿Estás seguro de que quieres salir?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="802"/>
        <source>Citadel Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Citadel Imager sigue ocupado.&lt;br&gt;¿Estás seguro de que quieres salir?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="813"/>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <location filename="../main.qml" line="819"/>
        <source>Preparing to write...</source>
        <translation>Preparándose para escribir…</translation>
    </message>
    <message>
        <location filename="../main.qml" line="832"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Toda la información existeste en %1 será eliminada. ¿Estás seguro de que quieres continuar?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="843"/>
        <source>Update available</source>
        <translation>Actualización disponible</translation>
    </message>
    <message>
        <location filename="../main.qml" line="844"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>Hay una versión más actual de Citadel Imager disponible.&lt;be&gt;¿Te gustaría visitar el sitio web para descargarla?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="884"/>
        <source>Error downloading OS list from Internet</source>
        <translation>Error al descargar la lista de sistemas operativos de internet</translation>
    </message>
    <message>
        <location filename="../main.qml" line="905"/>
        <source>Writing... %1%</source>
        <translation>Escribiendo... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="928"/>
        <source>Verifying... %1%</source>
        <translation>Verificando... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="935"/>
        <source>Preparing to write... (%1)</source>
        <translation>Preparándose para escribir... (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="950"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="../main.qml" line="957"/>
        <source>Write Successful</source>
        <translation>Escritura exitosa</translation>
    </message>
    <message>
        <location filename="../main.qml" line="959"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; se ha removido&lt;br&gt;&lt;br&gt;Ya puedes remover la tarjeta SD del lector</translation>
    </message>
    <message>
        <location filename="../main.qml" line="961"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;ha sido escrito a &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;Ya puedes remover la tarjeta SD del lector</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1003"/>
        <source>Error parsing os_list.json</source>
        <translation>Error al analizar os_list.json</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1104"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>Conecta una memoria USB que contenga imágenes primero.&lt;br&gt;Las imágenes tienen que estar localizadas en la carpeta root de la memoria USB.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1119"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>La escritura a la tarjeta SD está protegida.&lt;br&gt;Mueve la cerradura que se encuentra en la parte izquierda de la tarjeta SD hacia arriba, e intenta de nuevo.</translation>
    </message>
</context>
</TS>
