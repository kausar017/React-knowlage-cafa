import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='w-11/12 mx-auto flex items-center justify-between m-5 border-b-2 p-3'>
            <h1 className="text-4xl font-bold">Knowlage Cafa</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;