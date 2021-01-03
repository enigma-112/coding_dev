#include <MsgBoxConstants.au3>
    ; Assign a Local variable the search handle of all files in the current directory.
    Local $hSearch = FileFindFirstFile("C:\Users\KUNDAN\Downloads\a*")

    ; Check if the search was successful, if not display a message and return False.
    If $hSearch = -1 Then
        MsgBox($MB_SYSTEMMODAL, "", "Error: No files/directories matched the search pattern.")
    EndIf

    ; Assign a Local variable the empty string which will contain the files names found.
    Local $sFileName = "", $iResult = 0


        $sFileName = FileFindNextFile($hSearch)

        ; Display the file name.
        $iResult = MsgBox(BitOR($MB_SYSTEMMODAL, $MB_OKCANCEL), "", "File: " & $sFileName)



    ; Close the search handle.
    FileClose($hSearch)
