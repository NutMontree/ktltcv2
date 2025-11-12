"use client"
import { AntDesignOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';
import Link from "next/link";

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));
export default function Home() {
  const { styles } = useStyle();

  return (
    <main className=" ">
      <Link href={"https://ktltc.vercel.app/"}>

        <div className="relative z-10 overflow-hidden pb-[60px] pt-[100px] ">
          <div className="from-stroke/0 via-stroke to-stroke/0 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
          <div className="w-full px-4">
            <div className="text-center">
              <h1 className="flex justify-center text-xl ">คลังเก็บข้อมูลวิทยาลัยเทคนิคกันทรลักษ์ V2</h1>
              <h1 className="flex justify-center text-xl text-[#DAA520] pb-8">
                data storage V2<br /> Kanthalak Technical College
              </h1>
            </div>
            <div className="flex items-center justify-center gap-[10px]">
              <ConfigProvider
                button={{
                  className: styles.linearGradientButton,
                }}
              >
                <Space>
                  <Button type="primary" size="large" icon={<AntDesignOutlined />}>
                    กลับสู่หน้าหลัก
                  </Button>
                </Space>
              </ConfigProvider>
            </div>
          </div>
        </div >
      </Link>
    </main>
  );
}