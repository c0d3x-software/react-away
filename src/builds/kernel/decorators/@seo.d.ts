/** SEO decorator for title + description */
export declare function seo(title: string, description: string): Decorator<RFC>;
/** SEO decorator for title + charset */
export declare function seo(title: string, charset: "UTF-8" | "UTF-16"): Decorator<RFC>;
/** SEO decorator for title with MetaTag type */
export declare function seo(title: string, metadata: MetaTag): Decorator<RFC>;
/** SEO decorator for dynamic route with high-order functions */
export declare function seo(title: string, action: <T = record>(params: T) => MetaTag): Decorator<RFC>;
export interface SeoDecoratorInfo extends DecoratorInfo, MetaTag {
    tag: string;
    route: string;
}
