# PowerShell Script untuk Automatic Sync ke GitHub
# Cara pakai: .\sync-to-github.ps1 "pesan commit Anda"

param(
    [Parameter(Mandatory=$false)]
    [string]$CommitMessage = "Auto update: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

Write-Host "🔄 Starting automatic sync to GitHub..." -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path ".git")) {
    Write-Host "❌ Error: Not a git repository!" -ForegroundColor Red
    exit 1
}

# Check git status
Write-Host "📋 Checking changes..." -ForegroundColor Yellow
git status --short

# Pull latest changes first
Write-Host ""
Write-Host "⬇️  Pulling latest changes from GitHub..." -ForegroundColor Yellow
git pull origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error pulling changes. Please resolve conflicts manually." -ForegroundColor Red
    exit 1
}

# Add all changes
Write-Host ""
Write-Host "📦 Adding changes..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$changes = git status --porcelain
if (-not $changes) {
    Write-Host "✅ No changes to commit. Everything is up to date!" -ForegroundColor Green
    exit 0
}

# Commit changes
Write-Host ""
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "$CommitMessage"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error committing changes." -ForegroundColor Red
    exit 1
}

# Push to GitHub
Write-Host ""
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error pushing to GitHub." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Successfully synced to GitHub!" -ForegroundColor Green
Write-Host "🌐 Vercel will auto-deploy to https://www.luxiephoto.com in a few minutes" -ForegroundColor Cyan
Write-Host ""
