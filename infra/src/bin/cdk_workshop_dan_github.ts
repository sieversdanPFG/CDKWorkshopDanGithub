#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkWorkshopDanGithubStack } from '../lib/cdk_workshop_dan_github-stack';

const app = new cdk.App();
new CdkWorkshopDanGithubStack(app, 'CdkWorkshopDanGithubStack');
