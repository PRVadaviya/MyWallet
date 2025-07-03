// import './assets/styles/index.css';

const Welcome = lazy(() => import('./pages/welcome.jsx'))
const NotFoundPage = lazy(() => import('./pages/auth/notFound'))
const Login = lazy(() => import('./pages/auth/login/login.jsx'))
const Register = lazy(() => import('./pages/auth/register/register.jsx'))
const UnAuthorizedAccessPage = lazy(() => import('./pages/auth/unAuthorized.jsx'))

function App() {
 
  return (
    <>
       <Suspense fallback={<LoadingSpinner />}>
            <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
                <RoutesWrapper isDarkMode={isDarkMode}>
                    <Routes>

                        <Route path="/" element={<Welcome />} />
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/register" element={<Register />} />
                        <Route path="/unauthorized" element={<UnAuthorizedAccessPage />} />
                        <Route path="*" element={<NotFoundPage />} />

                      </Routes>
                </RoutesWrapper>
            </ThemeContext.Provider>
        </Suspense>
    </>
  )
}



function RoutesWrapper({ children, isDarkMode }) {
    return (
        <div className={isDarkMode ? "dark" : "light"}>
            {children}
        </div>
    )

}

function LoadingSpinner() {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Loading />
        </div>
    )
}

export default App
