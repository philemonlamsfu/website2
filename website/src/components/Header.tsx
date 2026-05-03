interface HeaderProps {
  currentPage: 'experience' | 'about';
  onPageChange: (page: 'experience' | 'about') => void;
}

const Header = ({ currentPage, onPageChange }: HeaderProps) => {
  return (
    <header>
      <div className="logo">
        Philemon Lam
      </div>
      <div className="header-nav">
        <button
          className={`nav-btn ${currentPage === 'experience' ? 'active' : ''}`}
          onClick={() => onPageChange('experience')}
        >
          Experience
        </button>
        <button
          className={`nav-btn ${currentPage === 'about' ? 'active' : ''}`}
          onClick={() => onPageChange('about')}
        >
          About
        </button>
      </div>
    </header>
  );
};

export default Header;