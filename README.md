# 🛡️ Facebook Data Deletion Endpoint via Cloudflare Workers  
# 🛡️ نقطة نهاية حذف بيانات فيسبوك باستخدام Cloudflare Workers

---

## 📌 Introduction | المقدمة

**🇫🇷**  
Ce projet fournit un endpoint conforme aux exigences de Facebook pour la suppression des données utilisateur, déployé via Cloudflare Workers. Il est conçu pour être léger, gratuit, et facilement réutilisable dans des projets journalistiques ou éducatifs.

**🇸🇦**  
يوفر هذا المشروع نقطة نهاية متوافقة مع متطلبات فيسبوك لحذف بيانات المستخدم، ويتم نشرها باستخدام Cloudflare Workers. تم تصميمه ليكون خفيفًا، مجانيًا، وسهل الاستخدام في المشاريع الصحفية أو التعليمية.

---

## ⚙️ Fonctionnalités | الميزات

- ✅ Support de la vérification `hub.challenge` (GET)
- ✅ Traitement du `signed_request` (POST)
- ✅ Page HTML de confirmation
- ✅ Compatible avec Facebook Developer Console
- ✅ Testé avec Postman

---

## 🧱 Déploiement sur Cloudflare | النشر على Cloudflare

1. Créez un Worker dans [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Copiez le contenu de `worker.js` dans l’éditeur
3. Cliquez sur **Save and Deploy**
4. Testez les endpoints via Postman

---

## 🔗 Endpoints

| Méthode | URL                                                                 | Description                          |
|---------|---------------------------------------------------------------------|--------------------------------------|
| GET     | `/data-deletion?hub.challenge=XYZ`                                 | Vérification Facebook                |
| POST    | `/data-deletion`                                                   | Suppression via `signed_request`     |
| GET     | `/confirm`                                                         | Page HTML de confirmation            |
