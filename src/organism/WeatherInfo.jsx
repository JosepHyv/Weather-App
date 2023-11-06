import React from "react";
import { useState } from "react";

import Card from '../molecules/InfoCard';

const Info = () => {

  const [ciudad, setCiudad] = useState('');
  return (
    <div class="rounded-md bg-transparent ">
        <div>
            28 grados
            Dia con nubes
        </div>
        <div>
            <Card/>
            <Card/>
            <Card/>
        </div>

    </div>
  );
};

export default Info;
