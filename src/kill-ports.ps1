# kill-ports.ps1
Write-Host "=== Eski portlar temizleniyor... ==="
$ports = @(3000, 5000)
foreach ($port in $ports) {
    $procId = (netstat -ano | findstr ":$port" | ForEach-Object { ($_ -split '\s+')[-1] }) | Select-Object -First 1
    if ($procId) {
        Write-Host "Port $port kullanılıyor. PID $procId sonlandırılıyor..."
        taskkill /PID $procId /F
    }
    else {
        Write-Host "Port $port zaten boş."
    }
}
Write-Host "=== Sunucu başlatılıyor... ==="
npm run dev
