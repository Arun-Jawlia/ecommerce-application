import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync
} from '../authSlice';

export default function Signup() {
  const count = useSelector();
  const dispatch = useDispatch();

  return (
    <div>
     Counter
    </div>
  );
}
