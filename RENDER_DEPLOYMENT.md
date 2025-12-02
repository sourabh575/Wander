# Render Deployment Guide for Wanderlust

## Step 1: Prepare Your GitHub Repository
✅ Your code is already pushed to: `https://github.com/sourabh575/Wander`

## Step 2: Create a Render Account
1. Go to [render.com](https://render.com)
2. Click **Sign Up** and create an account (connect with GitHub)
3. Authorize Render to access your GitHub repositories

## Step 3: Create a New Web Service on Render

### In Render Dashboard:
1. Click **+ New** → **Web Service**
2. Select **Deploy an existing repository** → Choose `sourabh575/Wander`
3. Configure the service:

| Setting | Value |
|---------|-------|
| **Name** | `wanderlust` (or your preferred name) |
| **Environment** | `Node` |
| **Region** | Choose closest to you (e.g., `Oregon`) |
| **Branch** | `main` |
| **Build Command** | `npm install` |
| **Start Command** | `node app.js` |

4. Click **Create Web Service**

## Step 4: Add Environment Variables in Render Dashboard

### After Web Service is created:
1. Go to your service → **Environment** tab
2. Click **Add Environment Variable** for each:

### Variable 1: ATLASDB_URL
```
Key:   ATLASDB_URL
Value: mongodb+srv://sourabhpatel9870_db_user:eAAZtgsOBzeLf8Nc@cluster0.zirmqke.mongodb.net/?appName=Cluster0
```

### Variable 2: SECRET
```
Key:   SECRET
Value: your_secure_secret_key_here_min_32_chars
```
⚠️ **Important:** Replace with a strong random string. Generate one with:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

3. Click **Save** after adding each variable

## Step 5: Verify Deployment

1. Check the **Logs** tab for any errors
2. Your app will be available at: `https://wanderlust.onrender.com` (or similar)
3. Monitor the deployment progress

## Environment Variables Summary

| Variable | Purpose | Example |
|----------|---------|---------|
| `ATLASDB_URL` | MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster...` |
| `SECRET` | Session encryption secret (min 32 chars) | Random hex string |

## Troubleshooting

### If deployment fails:
1. Check **Logs** tab for errors
2. Verify MongoDB Atlas connection string is correct
3. Ensure all environment variables are set
4. Make sure `node_modules/` is in `.gitignore`
5. Check `.env` is in `.gitignore` (secrets not pushed)

### Port Configuration:
- Render automatically assigns a PORT (usually 3000 or higher)
- Your app should listen on `process.env.PORT || 8080`

### Check your app.js:
Currently listens on port 8080. Consider updating:
```javascript
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server is listening on port " + PORT);
});
```

## Deploy Updates

Once deployed, any new push to `main` branch will trigger an automatic redeploy:
1. Make changes locally
2. Commit: `git add . && git commit -m "message"`
3. Push: `git push origin main`
4. Render automatically detects and deploys!

## Final Checklist

- ✅ Code pushed to GitHub
- ⏳ Add `ATLASDB_URL` in Render
- ⏳ Add `SECRET` in Render
- ⏳ Verify deployment logs
- ⏳ Test your live app

---

Need help? Check Render's docs: https://render.com/docs
