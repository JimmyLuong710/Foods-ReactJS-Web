import { useState } from "react";
import './nav.scss'

const Nav = ({setActiveOn}) => {
    let [active, setActive] = useState(['active', '', '', ''])

    const handleClickActiveNav = (key, name) => {
        let arr = ['','','','','']
        arr[key] = 'active'
        setActiveOn(name)
        setActive(arr)
      }
    return (
        <div className="container header-middle">
        <div className="row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="nav">
              <ul>
                <li className={active[0]} onClick={(e) => handleClickActiveNav(0, 'home')}>
                  <span>Home</span>
                </li>
                <li className={active[1]} onClick={(e) => handleClickActiveNav(1, 'foods')}>
                  <span> Đồ ăn</span>
                </li>
                <li className={active[2]} onClick={(e) => handleClickActiveNav(2, 'drinks')}>
                  <span> Đồ uống </span>
                </li>
                <li className={active[3]} onClick={(e) => handleClickActiveNav(3, 'all')} >
                  <span> Tất cả sản phẩm </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    )
}

export default Nav