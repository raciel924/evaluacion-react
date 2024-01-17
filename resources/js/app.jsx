require('./bootstrap');
import {createRoot} from 'react-dom/client';
import React from 'react'
//import { FaderComponent } from './bases/props/FaderComponent';
//import { Couter } from './bases/hooks/Couter';
//import { MultipleCouter } from './bases/01-useState/MultipleCouter';
//import { Form } from './bases/01-useState/Form';
import { MultipleForm } from './bases/01-useState/MultipleForm';

createRoot(document.getElementById('root')).render(<MultipleForm/>);

