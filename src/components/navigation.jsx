export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            RST - Real State Token - Inovação Imobiliária
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                Empresa
              </a>
            </li>
            <li>
              <a href='#tokenomics' className='page-scroll'>
                Funcionamento
              </a>
            </li>
            <li>
            <a href='#roadmap' className='page-scroll'>
                RoadMap
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Time
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
