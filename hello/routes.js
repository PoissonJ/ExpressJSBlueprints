app.get('/users/register', userRoutes.showRegistrationForm);
app.post('/users/register', userRoutes.createUser);

app.get('/users/login', userRoutes.showLoginForm);
app.get('/users/login', userRoutes.createSession);
