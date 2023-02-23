import './footer.css'
function Foot(){
    return(
        <>
        <footer>
            <span className="text-muted">All rights reserved 2023 @ Mohamed Mouhib Naffeti</span>          
            <hr></hr>
            <div className='lg'>
            <a href="https://www.facebook.com" className='h3'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://linkedin.com" className='h4'><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a href="https://instagram.com" className='h5'><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://github.com" className='h6'><i class="fa fa-github-square" aria-hidden="true"></i></a>
            </div>
        </footer>
        </>
    );
}
export default Foot;