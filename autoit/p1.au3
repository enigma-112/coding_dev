#cs
#include <WinAPIShellEx.au3>
$s_Path_Downloads = _WinAPI_ShellGetKnownFolderPath($FOLDERID_Downloads)
MsgBox(0,"", $s_Path_Downloads)
#ce
; ShellExecute(@UserProfileDir & "\Downloads")

#include <File.au3>
#include <File.au3>
#include <MsgBoxConstants.au3>

#include <WinAPIShellEx.au3>
$s_Path_Downloads = _WinAPI_ShellGetKnownFolderPath($FOLDERID_Downloads)
MsgBox(0,"", $s_Path_Downloads)
$iSort = 0
 Local $aFileList = _FileListToArrayRec( $s_Path_Downloads, "*", 1,0,0,0)
 _ArrayDisplay($aFileList, "Sorted tree")

    If @error = 1 Then
        MsgBox($MB_SYSTEMMODAL, "", "Path was invalid.")
        Exit
    EndIf
    If @error = 4 Then
        MsgBox($MB_SYSTEMMODAL, "", "No file(s) were found.")
        Exit
    EndIf
    ; Display the results returned by _FileListToArray.
    _ArrayDisplay($aFileList, "$aFileList")

