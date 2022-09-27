export const MainLayout = ({contenido})=>{
    return(<> <div className="container">
                <div className="card shadow">
                    {contenido}
                </div>
            </div>
    </>)
}