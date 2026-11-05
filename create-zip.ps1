Set-StrictMode -Version Latest

$excludePatterns = @(
    'node_modules',
    '.next',
    'package-lock.json',
    '*.log',
    '*.cache',
    'dist',
    'out',
    'ToneFinds-Website.zip'
)

Write-Host 'Creating ZIP archive...'

$files = Get-ChildItem -Path . -Recurse -File | Where-Object {
    $filePath = $_.FullName.Replace('\', '/')
    $isExcluded = $false
    foreach ($pattern in $excludePatterns) {
        if ($filePath -like "*$pattern*") {
            $isExcluded = $true
            break
        }
    }
    !$isExcluded
}

$files | Compress-Archive -DestinationPath '../ToneFinds-Website.zip' -Force

Write-Host 'ZIP archive created successfully!'
Write-Host "Size: $((Get-Item '../ToneFinds-Website.zip').Length / 1KB) KB"
Write-Host "Files included: $($files.Count)"