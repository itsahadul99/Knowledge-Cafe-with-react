import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='container flex justify-between items-center py-5 mx-5 border-b-2 mx-auto'>
            <h1 className="text-4xl font-bold uppercase">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;