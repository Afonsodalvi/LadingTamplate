export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
              
                Token contract address <a id="contractaddress" href="https://testnet.bscscan.com/address/0x43bE18b27c7709d870064FCF83EF4431eD82408f">0x43bE18b27c7709d870064FCF83EF4431eD82408f</a>
                <br></br>
                Official email address RSTimob@gmail.com
                <br></br>
                <a className="btn btn-custom btn-lg" href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82">Buy</a>
                <a className="btn btn-custom btn-lg btn-chart" href="https://poocoin.app/tokens/0x0ed7e52944161450477ee417de9cd3a859b14fd0">Chart</a>
                <hr></hr>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

