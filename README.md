# Career Coach — Collaboration Guide

Hi Nishtha 👋,  

This guide explains how you will commit to the branch **`collab`** (where we’ll work together).  
Later, we’ll merge our work from `collab` into the **`main`** branch.

---

## 🚀 First-time setup

If you don’t have the repo locally yet, clone it:

**Windows (CMD / PowerShell / Git Bash)**
```bash
git clone -b collab https://github.com/Nishtha1203/career-coach.git
cd career-coach
````

**macOS (Terminal)**

```bash
git clone -b collab https://github.com/Nishtha1203/career-coach.git
cd career-coach
```

---

## 🔀 Switch to the `collab` branch

If the branch already exists remotely:

```bash
git fetch origin
git switch -c collab origin/collab
```

If the branch already exists locally:

```bash
git switch collab
```

---

## 📝 Daily workflow

**1. Update your branch before starting work:**

```bash
git switch collab
git pull --rebase origin collab
```

**2. Make your changes in VS Code (or any editor).**

**3. Stage, commit, and push your changes:**

```bash
git add .
git commit -m "meaningful message here"
git push origin collab
```

✅ Example commit messages:

* `feat: add login page`
* `fix: button alignment issue`
* `chore: cleanup unused imports`

---

## ⚡ If your push is rejected

That means someone else pushed before you.
Update your branch, resolve conflicts if needed, then push again.

**Rebase way (preferred):**

```bash
git pull --rebase origin collab
# fix conflicts if Git shows them
git add <file>
git rebase --continue
git push origin collab
```

**Merge way (simpler):**

```bash
git pull origin collab
# fix conflicts
git add <file>
git commit
git push origin collab
```

---

## 🔗 Merging collab into main

### ✅ Recommended (office-style): Create a Pull Request

1. Push all your changes to `collab`.
2. Go to GitHub → Pull Requests → New Pull Request.
3. Base: `main`, Compare: `collab`.
4. Review → Merge.

### 🔄 Alternative: Merge locally (if allowed)

```bash
git switch main
git pull origin main
git merge --no-ff collab
git push origin main
```

---

## 🧹 Clean up branches

After merging, you can delete the `collab` branch:

```bash
# delete local branch
git branch -d collab

# delete remote branch
git push origin --delete collab
```

---

## 📌 Quick command cheatsheet

**Update branch**

```bash
git switch collab
git pull --rebase origin collab
```

**Stage → Commit → Push**

```bash
git add .
git commit -m "your message"
git push origin collab
```

**Merge to main**

```bash
git switch main
git pull origin main
git merge --no-ff collab
git push origin main
```

---

✨ That’s it! Always work on `collab`, push your changes there, and when we’re ready, we’ll merge into `main`.

```


