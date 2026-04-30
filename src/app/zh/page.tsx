import { LandingPage } from '@/components/landing-page';
import { contentZh } from '@/lib/content';

export const metadata = {
  title: 'Convertree | 想要源源不断的欧美直接客户吗？',
  description:
    '我们帮助贵司通过Google等渠道，建立一条稳定、可预测的欧美直客获客通道，让愿意下大单、接受合理利润空间的买家主动找到您——项目有效果再结算服务费用。',
};

export default function ZhLandingPage() {
  return <LandingPage content={contentZh} locale="zh" />;
}
