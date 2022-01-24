<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de_DE">
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="173"/>
        <source>Error writing to storage</source>
        <translation>Fehler beim Schreiben auf den Speicher</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="196"/>
        <location filename="../downloadextractthread.cpp" line="394"/>
        <source>Error extracting archive: %1</source>
        <translation>Fehler beim Entpacken des Archivs: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="264"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Fehler beim Einbinden der FAT32-Partition</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="285"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>Das Betriebssystem band die FAT32-Partition nicht ein</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="310"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>Fehler beim Wechseln in den Ordner &quot;%1&quot;</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="121"/>
        <source>opening drive</source>
        <translation>Gerät wird geöffnet</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="155"/>
        <source>Error running diskpart: %1</source>
        <translation>Fehler beim Ausführen von Diskpart: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="176"/>
        <source>Error removing existing partitions</source>
        <translation>Fehler beim Entfernen von existierenden Partitionen</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="203"/>
        <source>Authentication cancelled</source>
        <translation>Authentifizierung abgebrochen</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="208"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>Fehler beim Ausführen von authopen, um Zugriff auf Geräte zu erhalten &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="209"/>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translatorcomment>I don&apos;t use Mac OS, I would need help here. Unfinished translation:

Bitte stellen Sie sicher, dass &apos;Raspberry Pi Imager&apos; Zugriff auf &apos;removable volumes&apos; in privacy settings hat (unter &apos;files and folders&apos;. Sie können ihm auch &apos;full disk access&apos; geben).</translatorcomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="230"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>Speichergerät &apos;%1&apos; kann nicht geöffnet werden.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="278"/>
        <source>discarding existing data on drive</source>
        <translation>Vorhandene Daten auf dem Medium werden gelöscht</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="298"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>Erstes und letztes Megabyte des Mediums werden überschrieben</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="304"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>Schreibfehler während dem Löschen des MBR</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="313"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>Fehler beim Löschen des letzten Teiles der Speicherkarte.&lt;br&gt;Die Speicherkarte könnte mit einer falschen Größe beworben sein (möglicherweise Betrug).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="377"/>
        <source>starting download</source>
        <translation>Download wird gestartet</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="424"/>
        <source>Controlled Folder Access seems to be enabled. Please add both citadel-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="785"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>Fehler beim Lesen vom Speicher.&lt;br&gt;Die SD-Karte könnte kaputt sein.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="862"/>
        <source>Waiting for FAT partition to be mounted</source>
        <translation>Warten auf das Mounten der FAT-Partition</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="952"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Fehler beim Einbinden der FAT32-Partition</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="975"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>Das Betriebssystem band die FAT32-Partition nicht ein</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1012"/>
        <source>Unable to customize. File &apos;%1&apos; does not exist.</source>
        <translation>Anpassungen können nicht durchgeführt werden. Die Datei &apos;%1&apos; existiert nicht.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1016"/>
        <source>Customizing image</source>
        <translation>Image modifizieren</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1027"/>
        <source>Error creating firstrun.sh on FAT partition</source>
        <translation>Fehler beim Erstellen von firstrun.sh auf der FAT-Partition</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1076"/>
        <source>Error writing to config.txt on FAT partition</source>
        <translation>Fehler beim Schreiben in config.txt auf der FAT-Partition</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="1099"/>
        <source>Error writing to cmdline.txt on FAT partition</source>
        <translation>Fehler beim Schreiben in cmdline.txt auf der FAT-Partition</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="419"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>Zugriff verweigert-Fehler beim Schreiben auf den Datenträger.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="430"/>
        <source>Error writing file to disk</source>
        <translation>Fehler beim Schreiben der Datei auf den Speicher</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="455"/>
        <source>Error downloading: %1</source>
        <translation>Fehler beim Herunterladen: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="673"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>Download beschädigt. Prüfsumme stimmt nicht überein</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="685"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>Fehler beim Schreiben auf den Speicher (während flushing)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="693"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>Fehler beim Schreiben auf den Speicher (während fsync)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="719"/>
        <source>Error writing first block (partition table)</source>
        <translation>Fehler beim Schreiben auf des ersten Blocks (Partitionstabelle)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="803"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>Verifizierung fehlgeschlagen. Der Inhalt der SD-Karte weicht von dem Inhalt ab, der geschrieben werden sollte.</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="127"/>
        <location filename="../driveformatthread.cpp" line="191"/>
        <source>Error partitioning: %1</source>
        <translation>Fehler beim Partitionieren: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>Fehler beim Starten von fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>Fehler beim Verwenden von fat32format: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>Fehler beim Festlegen eines neuen Laufwerksbuchstabens</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>Ungültiges Gerät: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="149"/>
        <source>Error formatting (through udisks2)</source>
        <translation>Fehler beim Formatieren (mit udisks2)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="180"/>
        <source>Error starting sfdisk</source>
        <translation>Fehler beim Starten von sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="202"/>
        <source>Error starting mkfs.fat</source>
        <translation>Fehler beim Starten von mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="212"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>Fehler beim Verwenden von mkfs.fat: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="219"/>
        <source>Formatting not implemented for this platform</source>
        <translation>Formatieren ist auf dieser Plattform nicht implementiert</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="201"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>Die Speicherkapazität ist nicht groß genug.&lt;br&gt;Sie muss mindestens %1 GB betragen.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="207"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>Die Eingabedatei ist kein gültiges Disk-Image.&lt;br&gt;Die Dateigröße%1 Bytes ist kein Vielfaches von 512 Bytes.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="379"/>
        <source>Downloading and writing image</source>
        <translation>Image herunterladen und schreiben</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="522"/>
        <source>Select image</source>
        <translation>Image wählen</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="921"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>Möchten Sie das WiFi-Passwort dieses Systems übernehmen?</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="36"/>
        <source>opening image file</source>
        <translation>Abbilddatei wird geöffnet</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="41"/>
        <source>Error opening image file</source>
        <translation>Fehler beim Öffnen der Imagedatei</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="97"/>
        <source>NO</source>
        <translation>NEIN</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="110"/>
        <source>YES</source>
        <translation>JA</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="123"/>
        <source>CONTINUE</source>
        <translation>WEITER</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="135"/>
        <source>QUIT</source>
        <translation>BEENDEN</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="74"/>
        <source>Advanced options</source>
        <translation>Erweiterte Optionen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="91"/>
        <source>Image customization options</source>
        <translation>OS-Modifizierungen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="99"/>
        <source>for this session only</source>
        <translation>Nur für diese Sitzung</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="100"/>
        <source>to always use</source>
        <translation>Immer verwenden</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="112"/>
        <source>Set hostname:</source>
        <translation>Hostname:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="131"/>
        <source>Enable SSH</source>
        <translation>SSH aktivieren</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="142"/>
        <source>Use password authentication</source>
        <translation>Password zur Authentifizierung verwenden</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="184"/>
        <source>Allow public-key authentication only</source>
        <translation>Authentifizierung via Public-Key</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="158"/>
        <source>Set password for &apos;citadel&apos; user (will be changed during setup):</source>
        <translation>Passwort für &apos;citadel&apos; (Wird nach der Installation geändert):</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="199"/>
        <source>Set authorized_keys for &apos;citadel&apos;:</source>
        <translation>authorized_keys für &apos;citadel&apos;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="211"/>
        <source>Configure wifi</source>
        <translation>Wifi enrichten</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="230"/>
        <source>SSID:</source>
        <translation>SSID:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="243"/>
        <source>Password:</source>
        <translation>Passwort:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="259"/>
        <source>Show password</source>
        <translation>Passwort anzeigen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="264"/>
        <source>Wifi country:</source>
        <translation>Wifi-Land:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="275"/>
        <source>Set locale settings</source>
        <translation>Spracheinstellungen festlegen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="285"/>
        <source>Time zone:</source>
        <translation>Zeitzone:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="295"/>
        <source>Keyboard layout:</source>
        <translation>Tastaturlayout:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="308"/>
        <source>Persistent settings</source>
        <translation>Dauerhafte Einstellugen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="316"/>
        <source>Play sound when finished</source>
        <translation>Tonsignal nach Beenden abspielen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="320"/>
        <source>Eject media when finished</source>
        <translation>Medien nach Beenden auswerfen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="333"/>
        <source>SAVE</source>
        <translation>SPEICHERN</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="112"/>
        <source>Internal SD card reader</source>
        <translation>Interner SD-Kartenleser</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="71"/>
        <source>Warning: advanced settings set</source>
        <translation>Warnung: Erweiterte Optionen festgelegt</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="85"/>
        <source>Would you like to apply the image customization settings saved earlier?</source>
        <translation>Möchten Sie die vorher festgelegten OS-Modifizierungen anwenden?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="94"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>NEIN, EINSTELLUNGEN LÖSCHEN</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="106"/>
        <source>YES</source>
        <translation>JA</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="118"/>
        <source>EDIT SETTINGS</source>
        <translation>EINSTELLUNGEN BEARBEITEN</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="105"/>
        <location filename="../main.qml" line="360"/>
        <source>Operating System</source>
        <translation>Betriebssystem</translation>
    </message>
    <message>
        <location filename="../main.qml" line="117"/>
        <source>CHOOSE OS</source>
        <translation>OS WÄHLEN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="132"/>
        <source>Select this button to change the operating system</source>
        <translation>Klicken Sie auf diesen Knopf, um das Betriebssystem zu ändern</translation>
    </message>
    <message>
        <location filename="../main.qml" line="184"/>
        <location filename="../main.qml" line="654"/>
        <source>Storage</source>
        <translation>SD-Karte</translation>
    </message>
    <message>
        <location filename="../main.qml" line="196"/>
        <location filename="../main.qml" line="969"/>
        <source>CHOOSE STORAGE</source>
        <translation>SD-KARTE WÄHLEN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="226"/>
        <source>WRITE</source>
        <translation>SCHREIBEN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="231"/>
        <source>Select this button to start writing the image</source>
        <translation>Klicken Sie auf diesen Knopf, um mit dem Schreiben zu beginnen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="276"/>
        <source>CANCEL WRITE</source>
        <translation>SCHREIBEN ABBRECHEN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="279"/>
        <location filename="../main.qml" line="902"/>
        <source>Cancelling...</source>
        <translation>Abbrechen…</translation>
    </message>
    <message>
        <location filename="../main.qml" line="291"/>
        <source>CANCEL VERIFY</source>
        <translation>VERIFIZIERUNG ABBRECHEN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="294"/>
        <location filename="../main.qml" line="925"/>
        <location filename="../main.qml" line="987"/>
        <source>Finalizing...</source>
        <translation>Finalisieren…</translation>
    </message>
    <message>
        <location filename="../main.qml" line="461"/>
        <location filename="../main.qml" line="958"/>
        <source>Erase</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="462"/>
        <source>Format card as FAT32</source>
        <translation>Karte als FAT32 formatieren</translation>
    </message>
    <message>
        <location filename="../main.qml" line="470"/>
        <source>Use custom</source>
        <translation>Eigenes Image</translation>
    </message>
    <message>
        <location filename="../main.qml" line="471"/>
        <source>Select a custom .img from your computer</source>
        <translation>Wählen Sie eine eigene .img-Datei von Ihrem Computer</translation>
    </message>
    <message>
        <location filename="../main.qml" line="420"/>
        <source>Back</source>
        <translation>Zurück</translation>
    </message>
    <message>
        <location filename="../main.qml" line="23"/>
        <source>Citadel Pi Imager v%1</source>
        <translation>Citadel Pi Imager v%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="145"/>
        <source>Select additional options</source>
        <translation>Erweiterte Optionen auswählen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="157"/>
        <source>CONFIGURE</source>
        <translation>ANPASSEN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="171"/>
        <source>Select this button to change operating system settings</source>
        <translation>Klicke auf diesen Knopf, um die Betriebssystemseinstellungen zu ändern</translation>
    </message>
    <message>
        <location filename="../main.qml" line="209"/>
        <source>Select this button to change the destination storage device</source>
        <translation>Klicke auf diesen Knopf, um das Ziel-Speichermedium zu ändern</translation>
    </message>
    <message>
        <location filename="../main.qml" line="421"/>
        <source>Go back to main menu</source>
        <translation>Zurück zum Hauptmenü</translation>
    </message>
    <message>
        <location filename="../main.qml" line="536"/>
        <source>Released: %1</source>
        <translation>Veröffentlicht: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="539"/>
        <source>Cached on your computer</source>
        <translation>Auf Ihrem Computer zwischengespeichert</translation>
    </message>
    <message>
        <location filename="../main.qml" line="541"/>
        <source>Local file</source>
        <translation>Lokale Datei</translation>
    </message>
    <message>
        <location filename="../main.qml" line="543"/>
        <source>Online - %1 GB download</source>
        <translation>Online — %1 GB Download</translation>
    </message>
    <message>
        <location filename="../main.qml" line="705"/>
        <location filename="../main.qml" line="757"/>
        <location filename="../main.qml" line="763"/>
        <source>Mounted as %1</source>
        <translation>Als %1 eingebunden</translation>
    </message>
    <message>
        <location filename="../main.qml" line="759"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[SCHREIBGESCHÜTZT]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="801"/>
        <source>Are you sure you want to quit?</source>
        <translation>Sind Sie sicher, dass Sie beenden möchten?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="813"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="../main.qml" line="819"/>
        <source>Preparing to write...</source>
        <translation>Schreiben wird vorbereitet…</translation>
    </message>
    <message>
        <location filename="../main.qml" line="843"/>
        <source>Update available</source>
        <translation type="unfinished">Update verfügbar</translation>
    </message>
    <message>
        <location filename="../main.qml" line="844"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>Eine neuere Version von Imager ist verfügbar. &lt;br&gt;Möchten Sie die Webseite besuchen, um das Update herunterzuladen?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="905"/>
        <source>Writing... %1%</source>
        <translation>Schreiben... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="832"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Alle vorhandenen Daten auf &apos;%1&apos; werden gelöscht.&lt;br&gt;Möchten sie wirklich fortfahren?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="802"/>
        <source>Citadel Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Citadel Imager ist noch beschäftigt.&lt;br&gt;Sind Sie sicher, dass sie das Programm schließen möchten?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="884"/>
        <source>Error downloading OS list from Internet</source>
        <translation>Fehler beim Herunterladen der Betriebssystemsliste aus dem Internet</translation>
    </message>
    <message>
        <location filename="../main.qml" line="928"/>
        <source>Verifying... %1%</source>
        <translation>Verifizierung… %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="935"/>
        <source>Preparing to write... (%1)</source>
        <translation>Schreiben wird vorbereitet… (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="950"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <location filename="../main.qml" line="957"/>
        <source>Write Successful</source>
        <translation>Schreiben erfolgreich</translation>
    </message>
    <message>
        <location filename="../main.qml" line="959"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; wurde geleert&lt;br&gt;&lt;br&gt;Sie können die SD-Karte nun aus dem Lesegerät entfernen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="961"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; wurde auf&lt;b&gt;%2&lt;/b&gt; geschrieben&lt;br&gt;&lt;br&gt;Sie können die SD-Karte nun aus dem Lesegerät entfernen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1003"/>
        <source>Error parsing os_list.json</source>
        <translation>Fehler beim Parsen von os_list.json</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1104"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>Verbinden Sie zuerst einen USB-Stick mit Images.&lt;br&gt;Die Images müssen sich im Wurzelverzeichnes des USB-Sticks befinden.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1119"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>Die Speicherkarte ist schreibgeschützt.&lt;br&gt;Drücken Sie den Schutzschalter auf der linken Seite nach oben, und versuchen Sie es erneut.</translation>
    </message>
</context>
</TS>
