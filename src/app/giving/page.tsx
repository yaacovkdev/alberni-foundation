import ModelHero from "@/components/giving_model/model_hero/ModelHeader";
import ModelReasons from "@/components/giving_model/model_reasons/ModelReasons";

export default function page() {
  return (
    <article className="giving">
      <ModelHero />
      <ModelReasons />
    </article>
  )
}
