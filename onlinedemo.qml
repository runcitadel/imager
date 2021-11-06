import QtQuick 2.9
import QtQuick.Window 2.2
import QtQuick.Controls 2.2
import QtQuick.Layouts 1.0
import QtQuick.Controls.Material 2.2

ApplicationWindow {
    id: window
    visible: true

    title: qsTr("Citadel Pi Imager web demo")

    FontLoader {
        id: roboto; source: "https://raw.githubusercontent.com/runcitadel/imager/qml/fonts/Roboto-Regular.ttf"
    }
    FontLoader {
        id: robotoLight; source: "https://raw.githubusercontent.com/runcitadel/imager/qml/fonts/Roboto-Light.ttf"
    }
    FontLoader {
        id: robotoBold; source: "https://raw.githubusercontent.com/runcitadel/imager/qml/fonts/Roboto-Bold.ttf"
    }
    ColumnLayout {
        id: bg
        spacing: 0

        Rectangle {
            visible: true
            Layout.fillWidth: true
            width: window.width
            height: window.height * 65 / 100
            implicitHeight: window.height * 65 / 100
            color: "#3E3E3E"

            Image {
                id: image
                Layout.fillWidth: true
                Layout.alignment: Qt.AlignHCenter | Qt.AlignVCenter
                fillMode: Image.PreserveAspectFit
                source: "https://raw.githubusercontent.com/runcitadel/imager/qml/icons/dark-logo-stacked.svg"
                width: window.width
                height: window.height * 45 / 100
                anchors.centerIn: parent
            }
        }

        Rectangle {
            color: "#3E3E3E"
            implicitWidth: window.width
            implicitHeight: window.height * 35 / 100

            GridLayout {
                anchors.centerIn: parent
                id: gridLayout
                rowSpacing: 25

                anchors.fill: parent
                anchors.topMargin: 25
                anchors.rightMargin: 50
                anchors.leftMargin: 50

                rows: 3
                columns: 4
                columnSpacing: 25

                ColumnLayout {
                    id: columnLayout
                    spacing: 0
                    Layout.fillWidth: true

                    Text {
                        id: text1
                        color: "#ffffff"
                        text: qsTr("Operating System")
                        Layout.fillWidth: true
                        Layout.preferredHeight: 17
                        Layout.preferredWidth: 100
                        font.pixelSize: 12
                        font.family: robotoBold.name
                        font.bold: true
                        horizontalAlignment: Text.AlignHCenter
                    }

                    Button {
                        id: osbutton
                        text: qsTr("CHOOSE OS")
                        font.family: roboto.name
                        spacing: 0
                        padding: 0
                        bottomPadding: 0
                        topPadding: 0
                        Layout.minimumHeight: 40
                        Layout.fillWidth: true
                        onClicked: {
                            ospopup.open()
                            osswipeview.currentItem.forceActiveFocus()
                        }
                        Material.background: "#ffffff"
                        Material.foreground: "#000"
                        Accessible.ignored: ospopup.visible || dstpopup.visible || optionspopup.visible
                        Accessible.description: qsTr("Select this button to change the operating system")
                        Accessible.onPressAction: clicked()
                    }
                }

                ColumnLayout {
                    id: columnLayout5
                    spacing: 0
                    Layout.fillWidth: true

                    Text {
                        id: text5
                        color: "#ffffff"
                        text: qsTr("Select additional options")
                        Layout.fillWidth: true
                        Layout.preferredHeight: 17
                        Layout.preferredWidth: 100
                        font.pixelSize: 12
                        font.family: robotoBold.name
                        font.bold: true
                        horizontalAlignment: Text.AlignHCenter
                    }

                    Button {
                        id: settingsbutton
                        text: qsTr("CONFIGURE")
                        font.family: roboto.name
                        spacing: 0
                        padding: 0
                        bottomPadding: 0
                        topPadding: 0
                        Layout.minimumHeight: 40
                        Layout.fillWidth: true
                        onClicked: {
                            optionspopup.open()
                        }
                        Material.background: "#ffffff"
                        Material.foreground: "#000"
                        Accessible.ignored: ospopup.visible || dstpopup.visible || optionspopup.visible
                        Accessible.description: qsTr("Select this button to change operating system settings")
                        Accessible.onPressAction: clicked()
                    }
                }

                ColumnLayout {
                    id: columnLayout2
                    spacing: 0
                    Layout.fillWidth: true

                    Text {
                        id: text2
                        color: "#ffffff"
                        text: qsTr("Storage")
                        Layout.fillWidth: true
                        Layout.preferredHeight: 17
                        Layout.preferredWidth: 100
                        font.pixelSize: 12
                        font.family: robotoBold.name
                        font.bold: true
                        horizontalAlignment: Text.AlignHCenter
                    }

                    Button {
                        id: dstbutton
                        text: qsTr("CHOOSE STORAGE")
                        font.family: roboto.name
                        Layout.minimumHeight: 40
                        Layout.preferredWidth: 100
                        Layout.fillWidth: true
                        onClicked: {
                            dstpopup.open()
                            dstlist.forceActiveFocus()
                        }
                        Material.background: "#ffffff"
                        Material.foreground: "#000"
                        Accessible.ignored: ospopup.visible || dstpopup.visible || optionspopup.visible
                        Accessible.description: qsTr("Select this button to change the destination storage device")
                        Accessible.onPressAction: clicked()
                    }
                }

                ColumnLayout {
                    spacing: 0
                    Layout.fillWidth: true

                    Text {
                        text: " "
                        Layout.preferredHeight: 17
                        Layout.preferredWidth: 100
                    }

                    Button {
                        id: writebutton
                        text: qsTr("WRITE")
                        font.family: roboto.name
                        Layout.minimumHeight: 40
                        Layout.fillWidth: true
                        Accessible.ignored: ospopup.visible || dstpopup.visible || optionspopup.visible
                        Accessible.description: qsTr("Select this button to start writing the image")

                        enabled: false
                        Material.background: "#ffffff"
                        Material.foreground: "#000"
                        onClicked: {
                            writebutton.text = "Writing image..."
                            setTimeout(function() {
                                writebutton.text = "Done!"
                            }, 5000)
                            // TODO: Fake write here?
                        }
                        Accessible.onPressAction: clicked()
                    }
                }

                ColumnLayout {
                    id: columnLayout3
                    Layout.columnSpan: 4
                    Layout.alignment: Qt.AlignHCenter | Qt.AlignVCenter

                    Text {
                        id: progressText
                        font.pointSize: 10
                        color: "white"
                        font.family: robotoBold.name
                        font.bold: true
                        visible: false
                        horizontalAlignment: Text.AlignHCenter
                        Layout.fillWidth: true
                    }

                    ProgressBar {
                        id: progressBar
                        Layout.fillWidth: true
                        visible: false
                        Material.background: "#d15d7d"
                    }

                    Button {
                        id: cancelwritebutton
                        text: qsTr("CANCEL WRITE")
                        onClicked: {
                            enabled = false
                            progressText.text = qsTr("Cancelling...")
                            //imageWriter.cancelWrite()
                        }
                        Material.background: "#ffffff"
                        Material.foreground: "#000"
                        Layout.alignment: Qt.AlignRight
                        visible: false
                        font.family: roboto.name
                        Accessible.onPressAction: clicked()
                    }
                    Button {
                        id: cancelverifybutton
                        text: qsTr("CANCEL VERIFY")
                        onClicked: {
                            enabled = false
                            progressText.text = qsTr("Finalizing...")
                            //imageWriter.setVerifyEnabled(false)
                        }
                        Material.background: "#ffffff"
                        Material.foreground: "#000"
                        Layout.alignment: Qt.AlignRight
                        visible: false
                        font.family: roboto.name
                        Accessible.onPressAction: clicked()
                    }
                }
            }
        }
    }

    /*
      Popup for OS selection
     */
    Popup {
        id: ospopup
        x: 50
        y: 25
        width: parent.width-100
        height: parent.height-50
        padding: 0
        closePolicy: Popup.CloseOnEscape | Popup.CloseOnPressOutside
        property string categorySelected : ""

        // background of title
        Rectangle {
            color: "#f5f5f5"
            anchors.right: parent.right
            anchors.top: parent.top
            height: 35
            width: parent.width
        }
        // line under title
        Rectangle {
            color: "#afafaf"
            width: parent.width
            y: 35
            implicitHeight: 1
        }

        Text {
            text: "X"
            anchors.right: parent.right
            anchors.top: parent.top
            anchors.rightMargin: 25
            anchors.topMargin: 10
            font.family: roboto.name
            font.bold: true

            MouseArea {
                anchors.fill: parent
                cursorShape: Qt.PointingHandCursor
                onClicked: {
                    ospopup.close()
                }
            }
        }

        ColumnLayout {
            spacing: 10

            Text {
                text: qsTr("Operating System")
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                Layout.fillWidth: true
                Layout.topMargin: 10
                font.family: roboto.name
                font.bold: true
            }

            Item {
                clip: true
                Layout.preferredWidth: oslist.width
                Layout.preferredHeight: oslist.height

                SwipeView {
                    id: osswipeview
                    interactive: false

                    ListView {
                        id: oslist
                        model: osmodel
                        currentIndex: -1
                        delegate: osdelegate
                        width: window.width-100
                        height: window.height-100
                        boundsBehavior: Flickable.StopAtBounds
                        highlight: Rectangle {
                            color: "lightsteelblue"; radius: 5
                        }
                        ScrollBar.vertical: ScrollBar {
                            width: 10
                            policy: oslist.contentHeight > oslist.height ? ScrollBar.AlwaysOn : ScrollBar.AsNeeded
                        }
                        Keys.onSpacePressed: {
                            if (currentIndex != -1)
                                selectOSitem(model.get(currentIndex), true)
                        }
                        Accessible.onPressAction: {
                            if (currentIndex != -1)
                                selectOSitem(model.get(currentIndex), true)
                        }
                    }
                }
            }
        }
    }

    Component {
        id: suboslist

        ListView {
            model: ListModel {
                ListElement {
                    url: ""
                    icon: "https://raw.githubusercontent.com/runcitadel/imager/qml/icons/ic_chevron_left_40px.svg"
                    extract_size: 0
                    image_download_size: 0
                    extract_sha256: ""
                    contains_multiple_files: false
                    release_date: ""
                    subitems_url: "internal://back"
                    subitems: []
                    name: qsTr("Back")
                    description: qsTr("Go back to main menu")
                    tooltip: ""
                    website: ""
                }
            }

            currentIndex: -1
            delegate: osdelegate
            width: window.width-100
            height: window.height-100
            boundsBehavior: Flickable.StopAtBounds
            highlight: Rectangle {
                color: "lightsteelblue"; radius: 5
            }
            ScrollBar.vertical: ScrollBar {
                width: 10
                policy: parent.contentHeight > parent.height ? ScrollBar.AlwaysOn : ScrollBar.AsNeeded
            }
            Keys.onSpacePressed: {
                if (currentIndex != -1)
                    selectOSitem(model.get(currentIndex))
            }
            Accessible.onPressAction: {
                if (currentIndex != -1)
                    selectOSitem(model.get(currentIndex))
            }
        }
    }

    ListModel {
        id: osmodel

        ListElement {
            url: "internal://format"
            icon: "https://raw.githubusercontent.com/runcitadel/citadel/main/light-logo-glyph.png"
            extract_size: 3980394496
            image_download_size: 1237837307
            extract_sha256: ""
            contains_multiple_files: false
            release_date: "2021-10-10"
            subitems_url: ""
            subitems: []
            name: qsTr("Citadel OS")
            description: qsTr("The operating system for Citadel nodes")
            tooltip: ""
            website: ""
        }

        ListElement {
            url: "internal://format"
            icon: "https://raw.githubusercontent.com/runcitadel/imager/qml/icons/erase.png"
            extract_size: 0
            image_download_size: 0
            extract_sha256: ""
            contains_multiple_files: false
            release_date: ""
            subitems_url: ""
            subitems: []
            name: qsTr("Erase")
            description: qsTr("Format card as FAT32")
            tooltip: ""
            website: ""
        }
    }

    Component {
        id: osdelegate

        Item {
            width: window.width-100
            height: image_download_size ? 100 : 60
            Accessible.name: name+".\n"+description

            Rectangle {
                id: bgrect
                anchors.fill: parent
                color: "#f5f5f5"
                visible: mouseOver && parent.ListView.view.currentIndex !== index
                property bool mouseOver: false
            }
            Rectangle {
                id: borderrect
                implicitHeight: 1
                implicitWidth: parent.width
                color: "#dcdcdc"
                y: parent.height
            }

            Row {
                leftPadding: 25

                Column {
                    width: 64

                    Image {
                        source: icon == "icons/ic_build_48px.svg" ? "icons/cat_misc_utility_images.png": icon
                        verticalAlignment: Image.AlignVCenter
                        height: parent.parent.parent.height
                        fillMode: Image.Pad
                    }
                    Text {
                        text: " "
                        //                      visible: !icon
                    }
                }
                Column {
                    width: parent.parent.width-64-50-25

                    Text {
                        verticalAlignment: Text.AlignVCenter
                        height: parent.parent.parent.height
                        font.family: roboto.name
                        textFormat: Text.RichText
                        text: {
                            var txt = "<p style='margin-bottom: 5px; font-weight: bold;'>"+name
                            if (typeof(website) == "string" && website) {
                                txt += " &nbsp; <a href='"+website+"'> <img src='https://raw.githubusercontent.com/runcitadel/imager/qml/icons/ic_info_16px.png' align='top'></a>"
                            }
                            txt += "</p><font color='#1a1a1a'>"+description+"</font><font style='font-weight: 200' color='#646464'>"
                            if (typeof(release_date) == "string" && release_date)
                                txt += "<br>"+qsTr("Released: %1").arg(release_date)
                            if (typeof(url) == "string" && url != "" && url != "internal://format") {
                                txt += "<br>"+qsTr("Online - %1 GB download").arg((image_download_size/1073741824).toFixed(1));
                            }
                            txt += "</font>";

                            return txt;
                        }
                        id: osText

                        ToolTip {
                            visible: osMouseArea.containsMouse && typeof(tooltip) == "string" && tooltip != ""
                            delay: 1000
                            text: typeof(tooltip) == "string" ? tooltip : ""
                            clip: false
                        }
                    }

                }
                Column {
                    Image {
                        source: "https://raw.githubusercontent.com/runcitadel/imager/qml/icons/ic_chevron_right_40px.svg"
                        visible: (typeof(subitems) == "object" && subitems.count) || (typeof(subitems_url) == "string" && subitems_url != "" && subitems_url != "internal://back")
                        height: parent.parent.parent.height
                        fillMode: Image.Pad
                    }
                }
            }

            MouseArea {
                id: osMouseArea
                anchors.fill: parent
                cursorShape: Qt.PointingHandCursor
                hoverEnabled: true

                onEntered: {
                    bgrect.mouseOver = true
                }

                onExited: {
                    bgrect.mouseOver = false
                }

                onClicked: {
                    if (osText.hoveredLink) {
                        Qt.openUrlExternally(osText.hoveredLink)
                    } else {
                        selectOSitem(model)
                    }
                }
            }
        }
    }

    /*
      Popup for storage device selection
     */
    Popup {
        id: dstpopup
        x: 50
        y: 25
        width: parent.width-100
        height: parent.height-50
        padding: 0
        closePolicy: Popup.CloseOnEscape | Popup.CloseOnPressOutside

        // background of title
        Rectangle {
            color: "#f5f5f5"
            anchors.right: parent.right
            anchors.top: parent.top
            height: 35
            width: parent.width
        }
        // line under title
        Rectangle {
            color: "#afafaf"
            width: parent.width
            y: 35
            implicitHeight: 1
        }

        Text {
            text: "X"
            anchors.right: parent.right
            anchors.top: parent.top
            anchors.rightMargin: 25
            anchors.topMargin: 10
            font.family: roboto.name
            font.bold: true

            MouseArea {
                anchors.fill: parent
                cursorShape: Qt.PointingHandCursor
                onClicked: {
                    dstpopup.close()
                }
            }
        }

        ColumnLayout {
            spacing: 10

            Text {
                text: qsTr("Storage")
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                Layout.fillWidth: true
                Layout.topMargin: 10
                font.family: roboto.name
                font.bold: true
            }

            Item {
                clip: true
                Layout.preferredWidth: dstlist.width
                Layout.preferredHeight: dstlist.height

                ListView {
                    id: dstlist
                    delegate: dstdelegate
                    width: window.width-100
                    height: window.height-100
                    boundsBehavior: Flickable.StopAtBounds
                    highlight: Rectangle {
                        color: "lightsteelblue"; radius: 5
                    }
                    ScrollBar.vertical: ScrollBar {
                        width: 10
                        policy: dstlist.contentHeight > dstlist.height ? ScrollBar.AlwaysOn : ScrollBar.AsNeeded
                    }
                }
            }
        }
    }

    Component {
        id: dstdelegate

        Item {
            width: window.width-100
            height: 60
            Accessible.name: {
                var txt = description+" - "+(size/1000000000).toFixed(1)+" gigabytes"
                if (mountpoints.length > 0) {
                    txt += qsTr("Mounted as %1").arg(mountpoints.join(", "))
                }
                return txt;
            }
            property string description: model.description
            property string device: model.device
            property string size: model.size

            Rectangle {
                id: dstbgrect
                anchors.fill: parent
                color: "#f5f5f5"
                visible: mouseOver && parent.ListView.view.currentIndex !== index
                property bool mouseOver: false

            }
            Rectangle {
                id: dstborderrect
                implicitHeight: 1
                implicitWidth: parent.width
                color: "#dcdcdc"
                y: parent.height
            }

            Row {
                leftPadding: 25

                Column {
                    width: 64

                    Image {
                        source: isUsb ? "icons/ic_usb_40px.svg" : isScsi ? "icons/ic_storage_40px.svg" : "icons/ic_sd_storage_40px.svg"
                        verticalAlignment: Image.AlignVCenter
                        height: parent.parent.parent.height
                        fillMode: Image.Pad
                    }
                }
                Column {
                    width: parent.parent.width-64

                    Text {
                        textFormat: Text.StyledText
                        height: parent.parent.parent.height
                        verticalAlignment: Text.AlignVCenter
                        font.family: roboto.name
                        text: {
                            var sizeStr = (size/1000000000).toFixed(1)+" GB";
                            var txt;
                            if (isReadOnly) {
                                txt = "<p><font size='4' color='grey'>"+description+" - "+sizeStr+"</font></p>"
                                txt += "<font color='grey'>"
                                if (mountpoints.length > 0) {
                                    txt += qsTr("Mounted as %1").arg(mountpoints.join(", "))+" "
                                }
                                txt += qsTr("[WRITE PROTECTED]")+"</font>"
                            } else {
                                txt = "<p><font size='4'>"+description+" - "+sizeStr+"</font></p>"
                                if (mountpoints.length > 0) {
                                    txt += "<font color='grey'>"+qsTr("Mounted as %1").arg(mountpoints.join(", "))+"</font>"
                                }
                            }
                            return txt;
                        }
                    }
                }
            }



            MouseArea {
                anchors.fill: parent
                cursorShape: Qt.PointingHandCursor
                hoverEnabled: true

                onEntered: {
                    dstbgrect.mouseOver = true
                }

                onExited: {
                    dstbgrect.mouseOver = false
                }

                onClicked: {
                    selectDstItem(model)
                }
            }
        }
    }

    Popup {
        id: optionspopup
        //x: 62
        x: (parent.width-width)/2
        y: 10
        //width: parent.width-125
        width: popupbody.implicitWidth+60
        height: parent.height-20
        padding: 0
        closePolicy: Popup.CloseOnEscape | Popup.CloseOnPressOutside
        property bool initialized: false
        property bool hasSavedSettings: false
        property string config
        property string cmdline
        property string firstrun

        // background of title
        Rectangle {
            color: "#f5f5f5"
            anchors.right: parent.right
            anchors.top: parent.top
            height: 35
            width: parent.width
        }
        // line under title
        Rectangle {
            color: "#afafaf"
            width: parent.width
            y: 35
            implicitHeight: 1
        }

        Text {
            id: msgx
            text: "X"
            anchors.right: parent.right
            anchors.top: parent.top
            anchors.rightMargin: 25
            anchors.topMargin: 10
            font.family: roboto.name
            font.bold: true

            MouseArea {
                anchors.fill: parent
                cursorShape: Qt.PointingHandCursor
                onClicked: {
                    popup.close()
                }
            }
        }

        ColumnLayout {
            spacing: 20
            anchors.fill: parent

            Text {
                id: popupheader
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                Layout.fillWidth: true
                Layout.topMargin: 10
                font.family: roboto.name
                font.bold: true
                text: qsTr("Advanced options")
            }

            ScrollView {
                id: popupbody
                font.family: roboto.name
                //Layout.maximumWidth: popup.width-30
                Layout.fillWidth: true
                Layout.fillHeight: true
                Layout.leftMargin: 25
                Layout.topMargin: 10
                clip: true
                ScrollBar.vertical.policy: ScrollBar.AlwaysOn

                ColumnLayout {

                    GroupBox {
                        title: qsTr("Image customization options")
                        label: RowLayout {
                            Label {
                                text: parent.parent.title
                            }
                            ComboBox {
                                id: comboSaveSettings
                                model: {
                                    [qsTr("for this session only"),
                                        qsTr("to always use")]
                                }
                                Layout.minimumWidth: 250
                                Layout.maximumHeight: 40
                            }
                        }

                        ColumnLayout {
                            spacing: -10
                            RowLayout {
                                CheckBox {
                                    id: chkHostname
                                    text: qsTr("Set hostname:")
                                    onCheckedChanged: {
                                        if (checked) {
                                            fieldHostname.forceActiveFocus()
                                        }
                                    }
                                }
                                TextField {
                                    id: fieldHostname
                                    enabled: chkHostname.checked
                                    text: "citadel"
                                }
                                Text {
                                    text : ".local"
                                    color: chkHostname.checked ? "black" : "grey"
                                }
                            }
                            CheckBox {
                                id: chkSSH
                                text: qsTr("Enable SSH")
                                checked: true
                                enabled: false
                            }
                            ColumnLayout {
                                enabled: chkSSH.checked
                                Layout.leftMargin: 40
                                spacing: -5

                                RadioButton {
                                    id: radioPasswordAuthentication
                                    text: qsTr("Use password authentication")
                                    onCheckedChanged: {
                                        if (checked) {
                                            fieldUserPassword.forceActiveFocus()
                                        }
                                    }
                                }

                                GridLayout {
                                    Layout.leftMargin: 40
                                    columns: 2
                                    columnSpacing: 10
                                    rowSpacing: -5
                                    enabled: radioPasswordAuthentication.checked

                                    Text {
                                        text: qsTr("Set password for 'citadel' user (will be changed during setup):")
                                        color: parent.enabled ? (fieldUserPassword.indicateError ? "red" : "black") : "grey"
                                    }
                                    TextField {
                                        id: fieldUserPassword
                                        echoMode: TextInput.Password
                                        Layout.minimumWidth: 200
                                        property bool alreadyCrypted: false
                                        property bool indicateError: false

                                        onTextEdited: {
                                            if (alreadyCrypted) {
                                                /* User is trying to edit saved
                                           (crypted) password, clear field */
                                                alreadyCrypted = false
                                                clear()
                                            }
                                            if (indicateError) {
                                                indicateError = false
                                            }
                                        }
                                    }
                                }

                                RadioButton {
                                    id: radioPubKeyAuthentication
                                    text: qsTr("Allow public-key authentication only")
                                    onCheckedChanged: {
                                        if (checked) {
                                            fieldPublicKey.forceActiveFocus()
                                        }
                                    }
                                }
                                GridLayout {
                                    Layout.leftMargin: 40
                                    columns: 2
                                    columnSpacing: 10
                                    rowSpacing: -5
                                    enabled: radioPubKeyAuthentication.checked

                                    Text {
                                        text: qsTr("Set authorized_keys for 'citadel':")
                                        color: parent.enabled ? "black" : "grey"
                                    }
                                    TextField {
                                        id: fieldPublicKey
                                        Layout.minimumWidth: 200
                                    }
                                }
                            }

                            CheckBox {
                                id: chkWifi
                                text: qsTr("Configure wifi")
                                onCheckedChanged: {
                                    if (checked) {
                                        if (!fieldWifiSSID.length) {
                                            fieldWifiSSID.forceActiveFocus()
                                        } else if (!fieldWifiPassword.length) {
                                            fieldWifiPassword.forceActiveFocus()
                                        }
                                    }
                                }
                            }
                            GridLayout {
                                enabled: chkWifi.checked
                                Layout.leftMargin: 40
                                columns: 2
                                columnSpacing: 10
                                rowSpacing: -5

                                Text {
                                    text: qsTr("SSID:")
                                    color: parent.enabled ? (fieldWifiSSID.indicateError ? "red" : "black") : "grey"
                                }
                                TextField {
                                    id: fieldWifiSSID
                                    Layout.minimumWidth: 200
                                    property bool indicateError: false
                                    onTextEdited: {
                                        indicateError = false
                                    }
                                }

                                Text {
                                    text: qsTr("Password:")
                                    color: parent.enabled ? (fieldWifiPassword.indicateError ? "red" : "black") : "grey"
                                }
                                TextField {
                                    id: fieldWifiPassword
                                    Layout.minimumWidth: 200
                                    echoMode: chkShowPassword.checked ? TextInput.Normal : TextInput.Password
                                    property bool indicateError: false
                                    onTextEdited: {
                                        indicateError = false
                                    }
                                }

                                CheckBox {
                                    id: chkShowPassword
                                    Layout.columnSpan: 2
                                    text: qsTr("Show password")
                                    checked: true
                                }

                                Text {
                                    text: qsTr("Wifi country:")
                                    color: parent.enabled ? "black" : "grey"
                                }
                                ComboBox {
                                    id: fieldWifiCountry
                                    editable: true
                                }
                            }

                            CheckBox {
                                id: chkLocale
                                text: qsTr("Set locale settings")
                            }
                            GridLayout {
                                enabled: chkLocale.checked
                                Layout.leftMargin: 40
                                columns: 2
                                columnSpacing: 10
                                rowSpacing: -5

                                Text {
                                    text: qsTr("Time zone:")
                                    color: parent.enabled ? "black" : "grey"
                                }
                                ComboBox {
                                    id: fieldTimezone
                                    editable: true
                                    Layout.minimumWidth: 200
                                }

                                Text {
                                    text: qsTr("Keyboard layout:")
                                    color: parent.enabled ? "black" : "grey"
                                }
                                TextField {
                                    id: fieldKeyboardLayout
                                    Layout.minimumWidth: 200
                                    text: "us"
                                }
                            }
                        }
                    }

                    GroupBox {
                        title: qsTr("Persistent settings")
                        Layout.fillWidth: true

                        ColumnLayout {
                            spacing: -10

                            CheckBox {
                                id: chkBeep
                                text: qsTr("Play sound when finished")
                            }
                            CheckBox {
                                id: chkEject
                                text: qsTr("Eject media when finished")
                            }
                        }
                    }
                }
            }

            RowLayout {
                Layout.alignment: Qt.AlignCenter | Qt.AlignBottom
                Layout.bottomMargin: 10
                spacing: 20

                Button {
                    text: qsTr("SAVE")
                    onClicked: {
                        optionspopup.close()
                    }
                    Material.foreground: "#000"
                    Material.background: "#fff"
                    font.family: roboto.name
                    Accessible.onPressAction: clicked()
                }

                Text {
                    text: " "
                }
            }
        }

                function applySettings() {
                }

                function saveSettings() {
                }
            }

            /* Utility functions */
            /* Slots for signals imagewrite emits */
            function onDownloadProgress(now,total) {
                var newPos
                if (total) {
                    newPos = now/(total+1)
                } else {
                    newPos = 0
                }
                if (progressBar.value !== newPos) {
                    if (progressText.text === qsTr("Cancelling..."))
                        return

                    progressText.text = qsTr("Writing... %1%").arg(Math.floor(newPos*100))
                    progressBar.indeterminate = false
                    progressBar.value = newPos
                }
            }

            function onVerifyProgress(now,total) {
                var newPos
                if (total) {
                    newPos = now/total
                } else {
                    newPos = 0
                }

                if (progressBar.value !== newPos) {
                    if (cancelwritebutton.visible) {
                        cancelwritebutton.visible = false
                        cancelverifybutton.visible = true
                    }

                    if (progressText.text === qsTr("Finalizing..."))
                        return

                    progressText.text = qsTr("Verifying... %1%").arg(Math.floor(newPos*100))
                    progressBar.Material.accent = "#6cc04a"
                    progressBar.value = newPos
                }
            }

            function onPreparationStatusUpdate(msg) {
                progressText.text = qsTr("Preparing to write... (%1)").arg(msg)
            }

            function resetWriteButton() {
                progressText.visible = false
                progressBar.visible = false
                osbutton.enabled = true
                dstbutton.enabled = true
                writebutton.visible = true
                writebutton.enabled = imageWriter.readyToWrite()
                cancelwritebutton.visible = false
                cancelverifybutton.visible = false
            }

            function onError(msg) {
                msgpopup.title = qsTr("Error")
                msgpopup.text = msg
                msgpopup.openPopup()
                resetWriteButton()
            }

            function onSuccess() {}

            function onCancelled() {
                resetWriteButton()
            }

            function onFinalizing() {}


            function newSublist() {
                if (osswipeview.currentIndex == (osswipeview.count-1)) {
                    var newlist = suboslist.createObject(osswipeview)
                    osswipeview.addItem(newlist)
                }

                var m = osswipeview.itemAt(osswipeview.currentIndex+1).model

                if (m.count>1) {
                    m.remove(1, m.count-1)
                }

                return m
            }

            function selectOSitem(d, selectFirstSubitem) {
                if (typeof(d.subitems) == "object" && d.subitems.count) {
                    var m = newSublist()

                    for (var i=0; i<d.subitems.count; i++) {
                        m.append(d.subitems.get(i))
                    }

                    osswipeview.itemAt(osswipeview.currentIndex+1).currentIndex = (selectFirstSubitem === true) ? 0 : -1
                    osswipeview.incrementCurrentIndex()
                    ospopup.categorySelected = d.name
                } else {
                    osbutton.text = d.name
                    ospopup.close()
                    writebutton.enabled = true
                }
            }

            function selectDstItem(d) {
                dstpopup.close()
                dstbutton.text = "SD card"
                writebutton.enabled = true
            }

            Timer {
                id: timer
                running: false
                repeat: false

                property var callback

                onTriggered: callback()
            }
            function setTimeout(callback, delay) {
                if (timer.running) {
                    console.error("nested calls to setTimeout are not supported!");
                    return;
                }
                timer.callback = callback;
                timer.interval = delay + 1;
                timer.running = true;
            }
        }