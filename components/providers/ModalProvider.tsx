"use client";

import CardModal from "@/components/modals/cardModal";
import { useEffect, useState } from "react";
import ProModal from "../modals/ProModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
};

export default ModalProvider;
