import LandingPage from './components/LandingPage';
import { PricingDetailPage } from './components/PricingDetailPage';
import { pricingPlans } from './data/siteContent';

export default function App() {
  const currentPath = window.location.pathname;
  const selectedPlan = pricingPlans.find((plan) => plan.slug === currentPath);

  if (selectedPlan) {
    return <PricingDetailPage plan={selectedPlan} />;
  }

  return <LandingPage />;
}