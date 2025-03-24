import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class S3BucketStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 Bucket
    this.bucket = new s3.Bucket(this, 'MyS3Bucket', {
      bucketName: 'psanthgpsanthgtest', // Replace with your desired bucket name
      versioned: true, // Enable versioning
    });

    // Output the bucket name
    new cdk.CfnOutput(this, 'BucketName', {
      value: this.bucket.bucketName,
      description: 'The name of the S3 bucket',
      exportName: 'MyS3BucketName',
    });
  }
}