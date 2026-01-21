# Script d'installation pour le projet eCommerce
# Ce script installe toutes les dépendances nécessaires

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Installation du projet eCommerce MEAN" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Node.js est installé
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✓ Node.js détecté : $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "✗ Node.js n'est pas installé. Veuillez l'installer depuis https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Installation Backend
Write-Host ""
Write-Host "Installation des dépendances du Backend..." -ForegroundColor Yellow
Set-Location backend
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Backend : Installation réussie" -ForegroundColor Green
} else {
    Write-Host "✗ Backend : Erreur lors de l'installation" -ForegroundColor Red
}

# Installation Frontend
Write-Host ""
Write-Host "Installation des dépendances du Frontend..." -ForegroundColor Yellow
Set-Location ../webapp
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Frontend : Installation réussie" -ForegroundColor Green
} else {
    Write-Host "✗ Frontend : Erreur lors de l'installation" -ForegroundColor Red
}

# Retour à la racine
Set-Location ..

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Installation terminée !" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Pour démarrer l'application :" -ForegroundColor Yellow
Write-Host "  1. Backend  : cd backend && npm start" -ForegroundColor White
Write-Host "  2. Frontend : cd webapp && npm start" -ForegroundColor White
Write-Host ""
