import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Logo from '@/common/img/logo.png';
import useStores from '@/hooks/use-stores';
import { CommonEnum } from '@/enum';
import './index.scss';

const Demo = () => {
  const { id } = useParams();
  const { login } = useStores();
  console.log('id', id);
  return (
    <div className="login-page">
      <img className="logo" src={Logo} alt="logo" />
      {id}
      <label>
        {' '}
        {login === CommonEnum.LoginEnum.LOGGED ? '登了' : '没登录'}
      </label>
    </div>
  );
};

export default Demo;
