import multer from 'multer';

const avatarStorage = multer.diskStorage({
  destination: '/usr/src/app/public',
  filename: function (
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
  ) {
    console.log(req.user);
    callback(null, 'avatar-' + file.originalname);
  },
});

const productImageStorage = multer.diskStorage({
  destination: '/usr/src/app/public',
  filename: function (
    req: Express.Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
  ) {
    console.log(req.user);
    callback(null, 'product-' + file.originalname);
  },
});

const avatarUpload = multer({ storage: avatarStorage });
const productImageUpload = multer({ storage: productImageStorage });
export default { avatarUpload, productImageUpload };
