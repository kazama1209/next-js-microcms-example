import Image from "next/image";

import noImage from "assets/images/no-image.png";
import styles from "./PostDetail.module.scss";

export default function BlogDetail({ post }) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex-col">
          <div className={styles.contentWrapper}>
            <Image
              src={post.thumbnail?.url || noImage}
              width={640}
              height={480}
              alt="thumbnail image"
            />
            <div
              className="prose mt-3"
              dangerouslySetInnerHTML={{
                __html: `${post.body}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
