import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

// import AboutPagePreview from "/src/cms/preview-templates/AboutPagePreview";
// import BlogPostPreview from "/src/cms/preview-templates/BlogPostPreview";
// import ProductPagePreview from "/src/cms/preview-templates/ProductPagePreview";
// import IndexPagePreview from "/src/cms/preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
